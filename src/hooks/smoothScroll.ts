"use client";

import { useEffect } from "react";

interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
  updateURL?: "push" | "replace" | "none";
}

export function useSmoothScroll(options: SmoothScrollOptions = {}) {
  const { offset = 0, duration = 600, updateURL = "push" } = options;

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function easeInOutCubic(t: number) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animateScrollTo(targetY: number, duration: number) {
      return new Promise<void>((resolve) => {
        const startY = window.scrollY;
        const diff = targetY - startY;
        const startTime = performance.now();

        function step(now: number) {
          const elapsed = now - startTime;
          const t = Math.min(elapsed / duration, 1);
          const eased = easeInOutCubic(t);

          window.scrollTo(0, startY + diff * eased);

          if (t < 1) {
            requestAnimationFrame(step);
          } else {
            resolve();
          }
        }

        requestAnimationFrame(step);
      });
    }

    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        "a[href^='#']"
      );
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      e.preventDefault();

      const top =
        target.getBoundingClientRect().top + window.scrollY - offset;

      if (prefersReduced) {
        window.scrollTo({ top });
      } else {
        animateScrollTo(top, duration);
      }

      if (updateURL !== "none") {
        try {
          if (updateURL === "replace") {
            history.replaceState(null, "", hash);
          } else {
            history.pushState(null, "", hash);
          }
        } catch {}
      }

      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [offset, duration, updateURL]);
}

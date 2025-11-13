"use client";

import { useEffect } from "react";
import { useCurrentPath } from "@/hooks/useCurrentPath";

export interface RouteAction {
  path: string | RegExp;
  action: () => void;
}

export const useRouteWatcher = (actions: RouteAction[]) => {
  const { pathname } = useCurrentPath();

  useEffect(() => {
    actions.forEach(({ path, action }) => {
      const match =
        typeof path === "string" ? pathname === path : path.test(pathname);

      if (match) action();
    });
  }, [pathname, actions]);
};

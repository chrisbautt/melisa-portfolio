"use client";
import { usePathname, useSearchParams } from "next/navigation";

export const useCurrentPath = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = Object.fromEntries(searchParams.entries());

  return { pathname, query };
};

"use client";

import { usePathname, useSearchParams } from "next/navigation";

export const useCurrentPath = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Devuelve también los parámetros si se desean condiciones más finas
  const query = Object.fromEntries(searchParams.entries());

  return { pathname, query };
};

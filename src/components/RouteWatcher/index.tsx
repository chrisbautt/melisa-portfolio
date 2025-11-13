"use client";

import { useRouteWatcher, RouteAction } from "./useRouteWatcher";

interface RouteWatcherProps {
  actions: RouteAction[];
}

const RouteWatcher: React.FC<RouteWatcherProps> = ({ actions }) => {
  useRouteWatcher(actions);
  return null;
};

export default RouteWatcher;

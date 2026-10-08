"use client";

import * as React from "react";
import { MotionConfig } from "framer-motion";

// Respect the visitor's "reduce motion" OS setting for every framer-motion animation.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

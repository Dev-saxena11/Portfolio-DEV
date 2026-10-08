"use client";

import React, { useEffect, useRef } from "react";

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId = 0;
    let stars: { x: number; y: number; size: number; speed: number }[] = [];

    const initStars = () => {
      stars = [];
      // Cap the count so very large screens don't redraw thousands of arcs per frame
      const starCount = Math.min(Math.floor((canvas.width * canvas.height) / 4000), 600);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          speed: Math.random() * 0.05 + 0.01,
        });
      }
    };

    const drawFrame = (advance: boolean) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        if (advance) {
          star.y -= star.speed;
          if (star.y < 0) {
            star.y = canvas.height;
            star.x = Math.random() * canvas.width;
          }
        }
      });
    };

    const loop = () => {
      drawFrame(true);
      animationFrameId = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(animationFrameId);
      if (reduceMotion) {
        drawFrame(false); // one still frame, no animation
      } else {
        loop();
      }
    };

    const resizeCanvas = () => {
      // clientWidth excludes the scrollbar and any overflow, unlike innerWidth
      canvas.width = document.documentElement.clientWidth;
      canvas.height = window.innerHeight;
      initStars();
      start();
    };

    // Stop drawing while the tab is hidden
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animationFrameId);
      else start();
    };

    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", onVisibility);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function TypingAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}: TypingAnimationProps) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const fullText = texts[textIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-cursor ml-1 border-l-2 border-primary h-6 inline-block align-middle" />
    </span>
  );
}

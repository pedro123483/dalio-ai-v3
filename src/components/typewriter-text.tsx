"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export const TypewriterText = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseDuration = 2000 
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    const currentFullText = texts[currentTextIndex];
    
    if (!isDeleting && currentText === currentFullText) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return currentFullText?.slice(0, prev.length + 1) ?? prev;
        }
      });
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span className="text-white">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
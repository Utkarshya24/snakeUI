"use client";
import React, { useEffect, useRef, useState } from 'react';

export function useCarousel<T>(items: T[], interval = 3000) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = () => setActiveIndex((i) => (i + 1) % items.length);
  const handlePrev = () => setActiveIndex((i) => (i - 1 + items.length) % items.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [paused, activeIndex]);

  return {
    activeIndex,
    setPaused,
    handleTouchStart,
    handleTouchEnd,
    handleNext,
    handlePrev,
    currentItem: items[activeIndex],
  };
}

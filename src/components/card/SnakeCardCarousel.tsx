'use client';
import React from 'react';
import {
  SnakeCard,
  SnakeCardHeader,
  SnakeCardContent,
  SnakeCardFooter,
  SnakeCardPagination,
} from './SnakeCard';
import { useCarousel } from './useCarousel';
import { SnakeCardCarouselProps } from './types';

export function SnakeCardCarousel({
  slides,
  variant = 'modern',
  className = '',
  renderSlide,
  customFooter,
  showPagination = true,
  onConfirm,
  onCancel,
  onClick,
}: SnakeCardCarouselProps) {
  const {
    activeIndex,
    currentItem,
    setPaused,
    handleTouchStart,
    handleTouchEnd,
  } = useCarousel(slides);

  return (
    <SnakeCard
      onClick={onClick}
      variant={variant}
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full custom slide rendering support */}
      {renderSlide ? (
        renderSlide(currentItem, activeIndex)
      ) : (
        <>
          {currentItem.src && (
            <SnakeCardHeader
              src={currentItem.src}
              alt={currentItem.title}
            />
          )}
          <SnakeCardContent
            title={currentItem.title}
            subtitle={currentItem.subtitle}
          />
        </>
      )}

      {/* Pagination dots */}
      {showPagination && (
        <SnakeCardPagination total={slides.length} activeIndex={activeIndex} />
      )}

      {/* Footer customization */}
      {customFooter ? (
        customFooter
      ) : (
        <SnakeCardFooter
          onConfirm={onConfirm || (() => {})}
          onCancel={onCancel || (() => {})}
        />
      )}
    </SnakeCard>
  );
}

'use client';
import React from 'react';
import {
  SnakeCardProps,
  SnakeCardHeaderProps,
  SnakeCardContentProps,
  SnakeCardFooterProps,
  SnakeCardPaginationProps,
} from './types';
import { cardVariants } from './variants';
import { twMerge } from 'tailwind-merge';

export function SnakeCard({ variant = 'default', className, children, onClick }: SnakeCardProps) {
  return <div onClick={onClick} className={twMerge(cardVariants[variant], className)}>{children}</div>;
}

export function SnakeCardHeader({ src, alt }: SnakeCardHeaderProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
  );
}

export function SnakeCardContent({ title, subtitle }: SnakeCardContentProps) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      {subtitle && <p className="text-sm text-primary-text dark:text-primary-text">{subtitle}</p>}
    </div>
  );
}

export function SnakeCardPagination({ total, activeIndex }: SnakeCardPaginationProps) {
  return (
    <div className="flex gap-1 justify-center">
      {Array.from({ length: total }).map((_, idx) => (
        <span
          key={idx}
          className={twMerge(
            'h-2 w-2 rounded-full',
            idx === activeIndex
              ? 'bg-secondary'
              : 'bg-gray-300 dark:bg-gray-600'
          )}
        />
      ))}
    </div>
  );
}

export function SnakeCardFooter({ onConfirm, onCancel }: SnakeCardFooterProps) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <button
        onClick={onConfirm}
        className="bg-secondary text-white py-2 rounded-lg font-semibold hover:bg-primary transition cursor-pointer"
      >
        Confirm
      </button>
      <button
        onClick={onCancel}
        className="border border-gray-300 dark:border-gray-600 text-primary-text dark:text-white py-2 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
      >
        Cancel
      </button>
    </div>
  );
}

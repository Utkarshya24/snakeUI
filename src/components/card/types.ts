// components/card/types.ts

import { ReactNode, HTMLAttributes } from 'react';

export interface BaseCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface SnakeCardProps extends BaseCardProps {
  variant?: keyof typeof import('./variants').cardVariants;
  children: ReactNode;
  onClick?: () => void;
}

export interface SnakeCardHeaderProps {
  src: string;
  alt?: string;
}

export interface SnakeCardContentProps {
  title: string;
  subtitle?: string;
}

export interface SnakeCardFooterProps {
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface SnakeCardPaginationProps {
  total: number;
  activeIndex: number;
}

export interface SnakeCardCarouselProps extends BaseCardProps {
  slides: Array<{
    title: string;
    subtitle?: string;
    src?: string;
  }>;
  className?: string;
  variant?: keyof typeof import('./variants').cardVariants;
  renderSlide?: (item: any, index: number) => ReactNode;
  customFooter?: ReactNode;
  showPagination?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClick?: () => void;
}

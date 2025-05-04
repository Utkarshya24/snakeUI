import React from 'react';

/**
 * Common props shared by all SnakeTable components
 */
interface BaseProps {
  /** Optional Tailwind class overrides */
  className?: string;

  /** Component children (typically table content) */
  children: React.ReactNode;

  /** varients */
  variant?:  keyof typeof import('./variants').tableVariants;
}

/**
 * Props for <SnakeTable />
 */
export interface SnakeTableProps extends BaseProps {}

/**
 * Props for <SnakeTableHead />
 */
export interface SnakeHeadProps extends BaseProps {}

/**
 * Props for <SnakeTableBody />
 */
export interface SnakeBodyProps extends BaseProps {}

/**
 * Props for <SnakeTableRow />
 */
export interface SnakeRowProps extends BaseProps {}

/**
 * Props for <SnakeTableCell />
 */
export interface SnakeCellProps extends BaseProps {
  /** Tag to render as: 'td' | 'th' */
  as?: 'td' | 'th';
}

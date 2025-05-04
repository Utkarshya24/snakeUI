// components/table/Table.tsx

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { tableVariants, rowVariants, cellVariants } from './variants';
import {
  SnakeTableProps,
  SnakeHeadProps,
  SnakeBodyProps,
  SnakeRowProps,
  SnakeCellProps,
} from './types';

const base = {
  table: 'w-full text-sm text-left text-gray-500 dark:text-gray-400',
  head: 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400',
  body: 'bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700',
  row: 'hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors',
  cell: 'px-6 py-4 whitespace-nowrap',
};

export const SnakeTable = React.memo(
  React.forwardRef<HTMLTableElement, SnakeTableProps>(({ className = '', children, variant = 'default' }, ref) => (
    <div className={twMerge('overflow-x-auto relative', tableVariants[variant], className)}>
      <table ref={ref} className={twMerge(base.table)}>
        {children}
      </table>
    </div>
  ))
);
SnakeTable.displayName = 'SnakeTable';

export const SnakeTableHead = React.memo(
  React.forwardRef<HTMLTableSectionElement, SnakeHeadProps>(({ className = '', children }, ref) => (
    <thead ref={ref} className={twMerge(base.head, className)}>
      {children}
    </thead>
  ))
);
SnakeTableHead.displayName = 'SnakeTableHead';

export const SnakeTableBody = React.memo(
  React.forwardRef<HTMLTableSectionElement, SnakeBodyProps>(({ className = '', children }, ref) => (
    <tbody ref={ref} className={twMerge(base.body, className)}>
      {children}
    </tbody>
  ))
);
SnakeTableBody.displayName = 'SnakeTableBody';

export const SnakeTableRow = React.memo(
  React.forwardRef<HTMLTableRowElement, SnakeRowProps>(({ className = '', children, variant = 'default', ...rest }, ref) => (
    <tr ref={ref} className={twMerge(base.row, rowVariants[variant], className)} {...rest}>
      {children}
    </tr>
  ))
);
SnakeTableRow.displayName = 'SnakeTableRow';

export const SnakeTableCell = React.memo(
  React.forwardRef<HTMLTableCellElement, SnakeCellProps>(({ as = 'td', className = '', children, variant = 'default', ...rest }, ref) => {
    const Component = as;
    return (
      <Component ref={ref} className={twMerge(base.cell, cellVariants[variant], className)} {...rest}>
        {children}
      </Component>
    );
  })
);
SnakeTableCell.displayName = 'SnakeTableCell';



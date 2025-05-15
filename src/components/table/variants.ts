// components/table/variants.ts

export const tableVariants = {
    default: 'w-full text-sm text-left text-gray-700 dark:text-gray-400 shadow-lg rounded-lg overflow-hidden',
    striped: 'w-full text-sm text-left text-gray-700 dark:text-gray-400 bg-gradient-to-r from-secondary to-primary dark:primary dark:to-secondary divide-y divide-gray-200 dark:divide-gray-700',
    bordered: 'w-full text-sm text-left text-gray-700 dark:text-gray-400 border-2 border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:shadow-md',
    compact: 'w-full text-xs text-left text-gray-600 dark:text-gray-300 font-medium bg-gradient-to-r from-green-50 to-green-200 dark:from-green-900 dark:to-green-700 rounded-md',
    modern: 'w-full text-sm text-left text-gray-800 dark:text-gray-200 rounded-xl border-t-4 border-t-primary bg-white dark:bg-gray-900 shadow-xl hover:ring-2 ring-primary transition-all duration-200 ease-in-out',
    hoverEffect: 'w-full text-sm text-left text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border-b-2 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-in-out',
    minimal: 'w-full text-sm text-left text-gray-600 dark:text-gray-200 border-t border-gray-300 dark:border-gray-700 shadow-none bg-transparent',
  };
  
  export const rowVariants = {
    default: '',
    striped: '',
    bordered: 'border border-gray-200 dark:border-gray-700',
    compact: 'text-xs py-2',
    modern: 'hover:bg-secondary dark:hover:bg-primary transition',
    hoverEffect: 'hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200',
    minimal: '',
  };
  
  export const cellVariants = {
    default: '',
    striped: '',
    bordered: 'border-x border-gray-200 dark:border-gray-700',
    compact: 'text-xs px-3 py-2',
    modern: 'px-6 py-3 font-medium',
    hoverEffect: 'transition-all duration-200',
    minimal: '',
  };
  
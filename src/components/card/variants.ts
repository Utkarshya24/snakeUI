// components/card/variants.ts

export const cardVariants = {
  default:
    'w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md border border-gray-200 dark:border-gray-700',
  modern:
    'w-full max-w-md rounded-2xl bg-gradient-to-br from-secondary to-primary text-white p-6 shadow-xl',
  bordered:
    'w-full max-w-md rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 p-5',
  glass:
    'w-full max-w-md rounded-xl bg-white/20 backdrop-blur-md border border-white/30 p-6 shadow-lg',
  shadowed:
    'w-full max-w-md rounded-xl bg-white dark:bg-gray-800 p-6 shadow-2xl',
  soft:
    'w-full max-w-md rounded-xl bg-gray-50 dark:bg-gray-800 p-6 text-primary-text dark:text-primary-text',
  hoverZoom:
    'w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-6 shadow-lg transform transition-transform duration-300 hover:scale-[1.03]',
  elevated: 
    'w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300',
  outline: 
    'w-full max-w-md rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-6',
  gradientBorder: 
    'w-full max-w-md p-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl',
  imageOverlay: 
    'relative overflow-hidden w-full max-w-md rounded-xl shadow-md',
  neumorphic: 
    'w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-[8px_8px_15px_#d1d9e6,-8px_-8px_15px_#ffffff]',
  clickable: 
    'w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-6 transition duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer',
  flip: 
    'w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-6 transition-transform duration-700 transform perspective-1000 hover:rotate-y-180',
};

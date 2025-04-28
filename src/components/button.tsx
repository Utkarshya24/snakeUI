import React from 'react';

interface ButtonProps {
  varient?: "default" | "error"
  className?: string;
  children?: React.ReactNode; 
  style?: React.CSSProperties; 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  varient = "default",
  className = '',
  children,
  style,
  onClick,
  disabled = false,
}) => {
 
  const baseStyles = `
    flex items-center justify-center 
    px-4 py-2
    transition-colors duration-200 
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
  `;

  const varientStyle = {
    default:`
      text-color
      bg-accent
      hover:bg-primary
      focus:ring-primary
      ${disabled ? 'bg-gray-400' : ''}
    `,
    error:`
      text-white
      bg-red-600
      hover:bg-red-800
      focus:ring-red-800
      ${disabled ? 'bg-gray-400' : ''}
    `
  }

  return (
    <button
      className={`${baseStyles} ${varientStyle[varient]} ${className}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
import React from 'react';

interface ButtonProps {
  varient?: "default" | "error" | "outline"
  className?: string;
  children?: React.ReactNode; 
  style?: React.CSSProperties; 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  disabled?: boolean;
  loading?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  varient = "default",
  className = '',
  children,
  style,
  onClick,
  disabled = false,
  loading = false,
}) => {

  const baseStyles = `
    flex flex-row items-center justify-center gap-2 px-4 py-2 transition-colors duration-200 text-xl
    ${disabled ? 'opacity-50' : 'cursor-pointer hover:outline-none hover:ring-2 hover:ring-offset-2'}
  `;

  const varientStyle = {
    default:`
      text-slate
      bg-accent
      ${disabled ? 'bg-gray-400' : "hover:bg-primary hover:ring-primary"}
    `,
    error:`
      bg-red-600
      ${disabled ? 'bg-gray-400' : 'hover:bg-red-700 hover:ring-red-700'}
    `,
    outline: `
      text-primary
      bg-accent/20
      outline-2
      outline-accent
      ${disabled ? '' : 'hover:outline-primary'}
    `
  }

  return (
    <button
      className={`${baseStyles} ${varientStyle[varient]} ${className}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && !disabled ? 
      <span className='w-4 h-4'>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512" 
          className="animate-spin motion-reduce:hidden"
          fill="currentColor"
        >
        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/>
        </svg>
      </span> : ""}
      {children}
    </button>
  );
};

export default Button;
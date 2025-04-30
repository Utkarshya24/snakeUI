"use client"

import React, { useState } from 'react'

interface ButtonProps {
    varient?: "default" | "outline"
    iconClassName?: string;
    buttonClassName?: string;
    children?: React.ReactNode; 
    baseStyle?: React.CSSProperties;
    iconStyle?: React.CSSProperties; 
    buttonStyle?: React.CSSProperties; 
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
    icon?: React.ReactNode
}

const IconButton: React.FC<ButtonProps> = ({
    varient = "default",
    iconClassName,
    buttonClassName,
    children,
    icon,
    baseStyle,
    iconStyle,
    buttonStyle,
    onClick,
}) => {

    const [hover, setHover] = useState(false)

    const basestyles = `
        transition-all duration-200 w-16 h-16 text-xl
    `;

    const buttonstyle = `px-4 py-2 cursor-pointer`;

    const iconstyle = `py-3 px-4 rounded-full w-15`

    const varientStyle = {
        default: `
            text-slate
            bg-accent
        `,
        outline: `
            text-primary
            bg-accent/20
            outline-2
            outline-accent
            hover:outline-primary
        `
    }

    return (
        <div 
            className={`${basestyles}`}
            style={baseStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover 
                ? <button 
                    className={`${buttonstyle} ${varientStyle[varient]} ${buttonClassName}`}
                    onClick={onClick}
                    style={buttonStyle}
                >
                    {children}
                </button>
                : <div 
                    className={`${iconstyle} ${varientStyle[varient]} ${iconClassName}`} 
                    style={iconStyle}
                    
                >
                    {icon 
                        ? icon 
                        : <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 448 512"
                            fill="currentColor"
                        >
                            <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"/>
                        </svg>  
                    }
                </div>
            }
        </div>
    )
}

export default IconButton
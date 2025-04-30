"use client"

import React, { useState } from 'react'

interface TooltipProps {
    varient?: "default" | "outline"
    className?: string;
    iconClassName?: string;
    tooltipContainerClassName?: string;
    tooltipClassName?: string;
    children?: React.ReactNode; 
    tooltipText?: React.ReactNode; 
    baseStyle?: React.CSSProperties;
    iconStyle?: React.CSSProperties; 
    tooltipContainerStyle?: React.CSSProperties;
    tooltipStyle?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void; 
    disabled?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
    varient = "default",
    className,
    iconClassName,
    tooltipClassName,
    tooltipContainerClassName,
    baseStyle,
    iconStyle,
    tooltipContainerStyle,
    tooltipStyle,
    children,
    tooltipText,
    onClick,
    disabled = false,
}) => {

    const [hover, setHover] = useState(false)

    const varientStyle = {
        default: `
            bg-accent
            text-slate
        `,
        outline: `
            text-primary
            bg-accent/20
            outline-2
            outline-accent
            hover:outline-primary
        `
    }

    const basestyle = `relative w-16 h-16 flex flex-col items-center ${disabled ? "opacity-50" : "cursor-pointer"}`
    const iconstyle = `w-16 h-16 rounded-full flex items-center justify-center text-3xl py-2 px-4`
    const tooltipContainer = `absolute bottom-full mb-2 flex flex-col items-center`
    const tooltip = `px-4 py-2 rounded capitalize flex items-center justify-center gap-4 text-lg`


    return (
        <button className={`${basestyle} ${className}`} type='button' style={baseStyle}>
            <div 
                className={`${iconstyle} ${varientStyle[varient]} ${iconClassName}`}
                onClick={onClick}
                style={iconStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {children}
            </div>
            {!disabled && hover  && (
                    <div 
                    className={`${tooltipContainer} ${tooltipContainerClassName}`}
                    style={tooltipContainerStyle}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <div 
                        className={`${tooltip} ${varientStyle[varient]} ${tooltipClassName}`} 
                        style={tooltipStyle}
                        role="tooltip" 
                        aria-hidden={disabled}
                    >
                        {tooltipText}
                    </div>
                    <div className={`w-2 h-2 rotate-45 mt-[-4px] ${varientStyle[varient]}`}></div>
                </div>
            )}
        </button>
    )
}

export default Tooltip
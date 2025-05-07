"use client"

import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface TooltipProps {
    varient?: "default" | "outline"
    tooltipPosition?: "top" | "bottom" | "right" | "left";
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
    tooltipPosition = "top",
    className,
    iconClassName,
    tooltipClassName,
    tooltipContainerClassName,
    baseStyle,
    iconStyle,
    tooltipContainerStyle,
    tooltipStyle,
    children,
    tooltipText= "Snake",
    onClick, 
    disabled = false,
}) => {

    const [hover, setHover] = useState(false)

    const varientStyle = {
        default: `
            bg-secondary
            text-primary-text
        `,
        outline: `
            text-primary
            bg-transparent
            outline-2
            outline-accent
            hover:outline-primary
        `
    }

    const positionStyle = {
        top: `bottom-full`, // mt-[-4px]
        bottom: `top-20`, // mt-[-49px]
        right: `left-22 top-1/2 -translate-y-1/2`, // mt-[-28px] ml-[75px]
        left: `top-1/2 right-22 -translate-y-1/2`, // mt-[-28px] mr-[75px]
    }

    const basestyle = `relative w-16 h-16 flex flex-col items-center ${disabled ? "opacity-50" : "cursor-pointer"}`
    const iconstyle = `w-16 h-16 rounded-full flex items-center justify-center text-3xl py-2 px-4`
    const tooltipContainer = `absolute  mb-2 flex flex-col items-center`
    const tooltip = `px-4 py-2 rounded capitalize flex items-center justify-center gap-4 text-lg`


    return (
        <button className={`${basestyle} ${className}`} type='button' style={baseStyle}>
            <div 
                className={twMerge(`${iconstyle} ${varientStyle[varient]} ${iconClassName}`)}
                onClick={onClick}
                style={iconStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {children}
            </div>
            {!disabled && hover  && (
                    <div 
                    className={`${tooltipContainer} ${positionStyle[tooltipPosition]} ${tooltipContainerClassName}`}
                    style={tooltipContainerStyle}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <div 
                        className={twMerge(`${tooltip} ${varientStyle[varient]} ${tooltipClassName}`)} 
                        style={tooltipStyle}
                        role="tooltip" 
                        aria-hidden={disabled}
                    >
                        {tooltipText}
                    </div>
                    <div className={twMerge(`absolute w-2 h-2 rotate-45 ${varientStyle[varient]} 
                        ${tooltipPosition === "top"
                            ? "-bottom-1 -translate-x-1/2"
                            : tooltipPosition === "bottom"
                            ? "-top-1 -translate-x-1/2"
                            : tooltipPosition === "right"
                            ? "-left-1 top-1/2 -translate-y-1/2"
                            : tooltipPosition === "left"
                            ? "-right-1 top-1/2 -translate-y-1/2"
                            : ""
                        }
                        `)}></div>
                </div>
            )}
        </button>
    )
}

export default Tooltip
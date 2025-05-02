"use client"

import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge';

interface HamburgerProps {
    icons?: React.ReactNode[];
    children?: React.ReactNode;
    className?: string;
    iconClassName?: string;
    subIconContainerClassName?: string,
    subIconClassName?: string;
    baseStyle?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    subIconContainerStyle?: React.CSSProperties,
    subIconstyle?: React.CSSProperties;
    varient?: "default" | "outline";
    subIconposition?: "top" | "bottom" | "right" | "left";
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void; 
    disabled?: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({
    icons = [],
    children,
    className,
    iconClassName,
    subIconContainerClassName,
    subIconClassName,
    baseStyle,
    iconStyle,
    subIconContainerStyle,
    subIconstyle,
    varient = "default",
    onClick,
    disabled = false,
    subIconposition = "top",
}) => {
    const [showIcons, setShowIcons] = useState(false);

    const varientStyle = {
        default: `
            bg-secondary
            text-primary-text
        `,
        outline: `
            text-secondary
            bg-transparent
            outline-2
            outline-secondary
            hover:outline-primary
        `,
    }

    const positionStyle = {
        top: `bottom-28`,
        bottom: `top-28`,
        right: `flex-row top-2 left-32`,
        left: `flex-row top-2 right-32`
    }

    const basestyle = `relative flex flex-col items-center`
    const subIconContainer = `flex flex-col items-center gap-4 absolute transition-all duration-300 ${showIcons && !disabled  ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`
    const subicon = `w-16 h-16  py-2 px-4 rounded-full flex items-center justify-center shadow-md hover:scale-110 `
    const mainIcon = `w-20 h-20 py-2 px-4 rounded-full flex items-center justify-center hover:scale-105 ${showIcons && !disabled && varient!="outline" ? "bg-primary" : ""} ${disabled ? "opacity-50" : "cursor-pointer"}`

    return (
        <div className={`${basestyle} ${className}`} style={baseStyle}>
                <div 
                    className={twMerge(`${subIconContainer} ${positionStyle[subIconposition]} ${subIconContainerClassName}`)} 
                    style={subIconContainerStyle}
                >
                    {icons.map((icon , index) => (
                        <div
                            key={index}
                            className={twMerge(`${subicon} ${varientStyle[varient]} ${subIconClassName}`)}
                            style={subIconstyle}
                            onClick={onClick}
                        >
                            {icon}
                        </div>
                    ))}
                </div>
            <button
                onClick={() => setShowIcons(prev => !prev)}
                className={twMerge(`${varientStyle[varient]} ${mainIcon} ${iconClassName}`)}
                style={iconStyle}
            >
                {children}
            </button>
        </div>
    );
};

export default Hamburger;

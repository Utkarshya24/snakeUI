"use client"

import React, { useState } from 'react'

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
    varient?: "default" | "outline"
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
}) => {
    const [showIcons, setShowIcons] = useState(false);

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
        `,
    }

    const basestyle = `relative flex flex-col items-center`
    const subIconContainer = `flex flex-col items-center gap-4 absolute bottom-28 transition-all duration-300 ${showIcons && !disabled  ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`
    const subicon = `w-16 h-16  py-2 px-4 rounded-full flex items-center justify-center shadow-md hover:scale-110 `
    const mainIcon = `w-20 h-20 py-2 px-4 rounded-full flex items-center justify-center hover:scale-105 ${showIcons ? "bg-primary" : ""} ${disabled ? "opacity-50" : "cursor-pointer"}`

    return (
        <div className={`${basestyle} ${className}`} style={baseStyle}>
                <div className={`${subIconContainer} ${subIconContainerClassName}`} style={subIconContainerStyle}>
                    {icons.map((icon , index) => (
                        <div
                            key={index}
                            className={`${subicon} ${varientStyle[varient]} ${subIconClassName}`}
                            style={subIconstyle}
                            onClick={onClick}
                        >
                            {icon}
                        </div>
                    ))}
                </div>
            <button
                onClick={() => setShowIcons(prev => !prev)}
                className={`${mainIcon} ${varientStyle[varient]} ${iconClassName}`}
                style={iconStyle}
            >
                {children}
            </button>
        </div>
    );
};

export default Hamburger;

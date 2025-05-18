"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { GoDash } from "react-icons/go";

interface ToogleSwitchProps {
    buttonClassName?: string,
    switchClassName?: string,
    labelClassName?: string,
    buttonDisableClassName?: string,
    buttonStyle?: React.CSSProperties,
    switchStyle?: React.CSSProperties,
    labelStyle?: React.CSSProperties,
    disabled?: boolean,
    defaultChecked?: boolean,
    labelPosition?: "top" | "bottom" | "right" | "left",
    labelText?: React.ReactNode,
    enableIconSwitch?: boolean,
    iconSwitch1?: React.ReactNode,
    iconSwitch2?: React.ReactNode,
    enableCheckmark?: boolean,
    chekmark1?: React.ReactNode,
    chekmark2?: React.ReactNode,
}

const ToggleSwitch: React.FC<ToogleSwitchProps> = ({
    buttonClassName,
    switchClassName,
    labelClassName,
    buttonDisableClassName,
    buttonStyle,
    switchStyle,
    labelStyle,
    disabled = false,
    defaultChecked = false,
    labelPosition = "top",
    labelText = "SnakeUI",
    enableIconSwitch = false,
    iconSwitch1,
    iconSwitch2,
    enableCheckmark = false,
    chekmark1,
    chekmark2,
}) => {
    const [enabled, setEnabled] = useState(false);

    const isActive = enabled || defaultChecked;

    const buttonHeight = enableIconSwitch ? "h-8" : "h-6";
    const buttonWidth = enableIconSwitch ? "w-16" : "w-14";
    
    const buttonstyle = `
        relative inline-flex ${buttonHeight} ${buttonWidth} items-center 
        rounded-full transition-colors duration-300 cursor-pointer
        ${isActive && !enableIconSwitch ? "bg-secondary" : ""} 
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}
    `;

    const btnDisablestyle = `${isActive && !enableIconSwitch ? "" : "bg-gray-300"}`

    const switchstyle = `
        transform rounded-full transition-transform duration-300 
        flex justify-center items-center relative text-primary-text
        ${isActive ? "translate-x-8" : "translate-x-0"} 
        ${enableIconSwitch ? "h-8 w-8 bg-secondary" : "h-5 w-5 bg-white"}
    `;

    const labelstyle = `absolute text-lg ${isActive ? "text-primary-text dark:text-secondary" : "text-gray-300"}`;

    const positionStyle = {
        top: `-top-8`,
        bottom: `top-8`,
        right: `left-20 top-0`,
        left: `right-20 top-0`,
    };

    return (
        <button
            onClick={() => setEnabled(!enabled)}
            disabled={disabled}
            className={twMerge(`${buttonstyle} ${buttonClassName} ${btnDisablestyle} ${buttonDisableClassName}`)}
            style={buttonStyle}
        >
            <span
                className={twMerge(switchstyle, switchClassName)}
                style={switchStyle}
            >
                {enableIconSwitch && (isActive
                    ? <div>
                        {iconSwitch1 ? iconSwitch1 : <FaSun />}
                    </div>
                    : <div>
                        {iconSwitch2 ? iconSwitch2 : <FaMoon />}
                    </div>
                )}
                {enableCheckmark && (enabled 
                    ? <div className={`absolute ${enableIconSwitch ? "right-10" : "right-7"} `} > 
                        {chekmark1 ? chekmark1 : <FaCheck />}
                    </div> 
                    : <div className={`absolute ${enableIconSwitch ? "left-10" : "left-7"} `}>
                        {chekmark2 ? chekmark2 : <GoDash /> }
                    </div>  
                )}

            </span>

            <p
                className={twMerge(`${labelstyle} ${positionStyle[labelPosition]} ${labelClassName}`)}
                style={labelStyle}
                onClick={(e) => e.stopPropagation()}
            >
                {labelText}
            </p>
        </button>
    );
};

export default ToggleSwitch;

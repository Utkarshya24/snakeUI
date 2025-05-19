"use client"

import React, { FC, useState } from 'react'
import { SnakeAlertProps } from './types'
import { twMerge } from 'tailwind-merge'
import { actions, alertType, icons, titles } from './variants';

const baseStyles = {
    alert: `flex justify-center items-center gap-6 px-4 py-2 max-w-max`,
    action: `px-2 py-1 hover:bg-gray-900 transition-all ease-in-out duration-150 cursor-pointer rounded-sm`,
    undoAction: `py-1 px-2 hover:bg-gray-900 hover:text-white hover:border cursor-pointer`,
    title: `font-bold`,
    shadow: `shadow-lg shadow-black/50`,
}

const SnakeAlert: FC<SnakeAlertProps> = ({
    className,
    children,
    iconStyle, 
    labelContainerStyle,
    titleStyle,
    messageStyle,
    actionStyle,
    undoActionStyle,
    disableIcon= false,
    enableTitle= false,
    enableAction= false,
    enableCollapse= false,
    enableShadow= false,
    customIcon,
    customTitle,
    theme= "dark",
    type= "success",
    customAction,
    customUndoAction = "Undo",
}) => {

    const [collapse, setcollapse] = useState(false)

    return (
        <div>
            <div className={twMerge(
                baseStyles.alert,
                alertType[theme]?.[type],
                className,
                enableShadow && baseStyles.shadow,
                collapse ? "hidden" : ""
            )}>
                <div className={`${enableTitle ? "flex flex-col " :""} ${labelContainerStyle}`}>
                    
                    <p className={iconStyle}>
                        {!disableIcon ? (customIcon ? customIcon : icons[type]) : "" }
                    </p>
                </div>
                <div className={`${enableTitle ? "flex flex-col " :""} ${labelContainerStyle}`}>
                <p className={twMerge(
                        baseStyles.title,
                        titleStyle
                    )}>
                        {enableTitle ? (customTitle ? customTitle :  titles[type]) : ""}
                    </p>
                <p className={twMerge(
                    messageStyle
                )}>
                    {children}
                </p>
                </div>

                <button 
                    className={`${baseStyles.action} ${actionStyle}`}
                    onClick={enableCollapse ? () => setcollapse(true) : undefined}
                >
                    {enableAction ? (customAction ? customAction : actions[type]) : ""}
                </button>
            </div>

            <button 
                className={twMerge(
                    baseStyles.undoAction,
                    alertType[theme]?.[type],
                    undoActionStyle,
                    collapse ? "flex" : "hidden"
                )}
                onClick={() => setcollapse(false)}
            >
                {customUndoAction}
            </button>
        </div>
    )
}

export default SnakeAlert
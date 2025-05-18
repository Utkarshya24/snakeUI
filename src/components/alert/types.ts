import React from "react";
import { alertType } from "./variants";

type alertTheme = keyof typeof alertType
type alertType = keyof (typeof alertType)[alertTheme]


export interface SnakeAlertProps {
    className?: string,
    children?: React.ReactNode,
    disableIcon?: Boolean,
    enableTitle?: Boolean,
    enableAction?: Boolean,
    enableCollapse?: Boolean,
    enableShadow?: Boolean,
    customIcon?: React.ReactNode,
    customTitle?: React.ReactNode,
    customAction?: React.ReactNode,
    customUndoAction?: React.ReactNode,
    labelContainerStyle?: string,
    iconStyle?: string,
    titleStyle?: string,
    messageStyle?: string,
    actionStyle?: string,
    undoActionStyle?: string,
    theme?: alertTheme,
    type?: alertType,
}
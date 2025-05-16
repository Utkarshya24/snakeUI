import React from 'react'

interface BaseProps {
    className?: string,
    children?: React.ReactNode,
    backgroundClass?: string,
    filledClass?: string,
    thumbColor?: string,
    steps?: number,
    disabled?: Boolean,
    enableVertical?: Boolean,
    filled?: any,
    beforeFilled?: string,
    afterFilled?: string,
    size?: keyof typeof import('./variants').sizeVariants
}

export interface SnakeSliderProps extends BaseProps {
    enableIcons?: Boolean,
    enableSteps?: Boolean,
    SliderValue?: number,
    variantType?: "default" | "withInput",
    
}

export interface SnakeInputProps extends BaseProps {
    value?: number,
    onChange?: (val: number) => void,
}

export interface SnakeIconProps extends BaseProps {}

export interface SnakeTickProps extends BaseProps {}

export interface SnakeIconProps extends BaseProps {}

import React from 'react'

interface BaseProps {
    className?: string,
    children?: React.ReactNode,
}

export interface SnakeSliderProps extends BaseProps {
    enableIcons?: Boolean,
    enableSteps?: Boolean,
    disable?: Boolean,
    SliderValue?: any,
    step?: number,
    variant?: keyof typeof import('./variants').sizeVariants
}

export interface SnakeInputProps extends BaseProps {
    value?: number,
    inputVariant?: string,
    steps?: any,
    disabled?: Boolean,
    variant?: keyof typeof import('./variants').sizeVariants
}

export interface SnakeIconProps extends BaseProps {}

export interface SnakeTickProps extends BaseProps {
    filled?: any,
    beforeFilled?: string,
    afterFilled?: string,
}
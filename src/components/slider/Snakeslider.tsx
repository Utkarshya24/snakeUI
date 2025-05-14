"use client"

import React, {FC, useState } from 'react'
import { SnakeIconProps, SnakeInputProps, SnakeSliderProps, SnakeTickProps } from './types'
import { sizeVariants } from './variants'
import { twMerge } from 'tailwind-merge'
import { FaVolumeDown } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";

const base = {
  SnakeSliderStyle: `flex justify-items-center gap-2`,
  inputContainerStyle: `relative w-64 h-4`,
  inputStyle: `absolute top-0 left-0 w-full h-4 bg-transparent appearance-none z-10`,
  filledStyle: `absolute top-1/2 -translate-y-1/2 rounded-full bg-secondary`,
  backgroundStyle: `absolute top-1/2 -translate-y-1/2 w-full bg-primary/60 rounded-full`,
  thumbStyle: `bg-white`,
  disable: `bg-gray-300/60`
}

export const SnakeSlider: FC<SnakeSliderProps> = ({
  className,
  enableIcons = true,
  enableSteps = true,
  disable = true,
  variant= "medium",
  SliderValue= 40,
  step= 10
}) => {
  
  return (
    <div className={`${base.SnakeSliderStyle} ${className}`}>

      {enableIcons && 
        <Icons>
          <FaVolumeDown/>
        </Icons>
      }

      <SnakeInput 
        value={SliderValue}
        inputVariant= {variant}
        disabled={disable}
        {...(enableSteps ? { steps: step } : {})}
      />

      {enableIcons && 
        <Icons>
          <FaVolumeUp/>
        </Icons>
      }
    </div>
  )
}

export const SnakeInput: FC<SnakeInputProps & { inputVariant?: keyof typeof sizeVariants }> = ({
  className,
  value= 40,
  inputVariant = "small",
  steps,
  disabled,
}) => {
    const [inputValue, setInputValue] = useState(value)

    const thumHeight = 
    inputVariant === "small"
    ? "h-4"
    : inputVariant === "medium"
    ? "h-6"
    : inputVariant === "large"
    ? "h-8"
    : ""

    const thumWeight = 
    inputVariant === "small"
    ? "w-4"
    : inputVariant === "medium"
    ? "w-6"
    : inputVariant === "large"
    ? "w-8"
    : ""

  return (
    <div className={`${base.inputContainerStyle} ${className}`}>

      {/* Background Track */}
      <div className={twMerge(`${base.backgroundStyle} ${sizeVariants[inputVariant]}`)} />

      {/* Filled Track */}
      <div
        className={twMerge(`${base.filledStyle} ${disabled && base.disable} ${sizeVariants[inputVariant]}`)}
        style={{ width: `${inputValue}%` }}
      />

      {/* Slider Input */}
      <input
        type="range"
        min={0}
        max={100}
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value))}
        className={`
          ${base.inputStyle}
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:${thumHeight}
          [&::-webkit-slider-thumb]:${thumWeight}
          [&::-webkit-slider-thumb]:${base.thumbStyle}
        `}
        step={steps}
        disabled={!!disabled}
      />

      <div className="absolute top-1/2 w-full flex justify-between -translate-y-1/2 pointer-events-none">
        {Array.from({length: Math.floor(100 / steps) + 1}).map((_, i) => {
          
          const tickValue = i * steps;
          const isFilled = tickValue <= inputValue;
          
          return (
            <Tick filled={isFilled} key={i}/>
          )
        })}
      </div>
      
    </div>
  )
}

const Icons: FC<SnakeIconProps> = ({
  className,
  children,
}) => {

  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

const Tick: FC<SnakeTickProps> = ({
  className,
  filled,
  beforeFilled = "bg-gray-700",
  afterFilled = "bg-gray-300",
}) => (
    <div
      className={`w-[2px] h-1 ${filled ? beforeFilled : afterFilled} ${className}`}
    />
)
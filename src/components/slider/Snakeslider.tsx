"use client"

import React, { FC, useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { FaVolumeDown, FaVolumeUp } from 'react-icons/fa';
import { SnakeIconProps, SnakeInputProps, SnakeSliderProps, SnakeTickProps, TooltipProps } from './types';
import { sizeVariants, tooltipVariants } from './variants';
import { RiDropFill } from 'react-icons/ri';

const base = {
  SnakeSliderStyle: `flex items-center gap-2`,
  inputContainerStyle: `relative w-64 h-4`,
  inputStyle: `appearance-none bg-transparent absolute z-20 w-full h-4 top-0 left-0`,
  filledStyle: `absolute top-1/2 -translate-y-1/2 rounded-full h-2 z-10`,
  backgroundStyle: `absolute top-1/2 -translate-y-1/2 w-full rounded-full h-2 z-5`,
  verticalInputContainerStyle: `relative w-4 h-64 flex justify-center items-center`,
  verticalInputStyle: `appearance-none bg-transparent absolute z-20 w-64 h-4 rotate-[-90deg] origin-center cursor-pointer`,
  verticalFilledStyle: `absolute left-1/2 -translate-x-1/2 rounded-full w-2 bottom-0 z-10`,
  verticalBackgroundStyle: `absolute left-1/2 -translate-x-1/2 h-full w-2 z-5 rounded-full`,
  disable: `opacity-50`,
  tooltipBase: `absolute z-40 text-xs text-white px-2 py-1 font-bold`,
  tooltipTop: `bottom-5`,
  tooltipBottom: `top-5`,
};

export const SnakeSlider: FC<SnakeSliderProps> = ({
  className,
  enableIcons = false,
  enableSteps = false,
  disabled = false,
  enableVertical= false,
  size = 'small',
  SliderValue = 40,
  steps = 10,
  variantType = 'default',
  backgroundClass = 'bg-primary/50',
  filledClass = 'bg-secondary',
  thumbColor = "#16A34A",
  tooltipContainer,
  tooltipVariant,
  tooltipPosition = "top",
  enableTooltip = false,
}) => {
  const [value, setValue] = useState(SliderValue);

  return (
    <div className={twMerge(base.SnakeSliderStyle, enableVertical ? "flex-col" : "" , className)}>
      {enableIcons && variantType === 'default' && (
        <Icons>
          <FaVolumeDown />
        </Icons>
      )}

      {variantType === 'withInput' && (
        <Icons>
          <FaVolumeDown />
        </Icons>
      )}

      <SnakeInput
        value={value}
        disabled={!!disabled}
        steps={enableSteps ? steps : undefined}
        onChange={setValue}
        enableVertical={enableVertical}
        backgroundClass={backgroundClass}
        filledClass={filledClass}
        thumbColor={thumbColor}
        size= {size}
        tooltipVariant={tooltipVariant}
        tooltipPosition={tooltipPosition}
        enableTooltip={enableTooltip}
        tooltipContainer={tooltipContainer}
      />

      {enableIcons && variantType === 'default' && (
        <Icons>
          <FaVolumeUp />
        </Icons>
      )}

      {variantType === 'withInput' && (
        <input
          type="number"
          min={0}
          max={100}
          value={value}
          disabled={!!disabled}
          onChange={(e) => {
            const val = parseInt(e.target.value);
            if (!isNaN(val)) setValue(val);
          }}
          className="w-12 text-center border-b border-white bg-transparent outline-none"
        />
      )}
    </div>
  );
};

export const SnakeInput: FC<SnakeInputProps> = ({
  className,
  value = 40,
  size = 'small',
  steps,
  disabled,
  thumbColor = '#ffffff',
  onChange,
  enableVertical = false,
  backgroundClass = 'bg-primary/50',
  filledClass = 'bg-secondary',
  tooltipPosition = 'left',
  tooltipVariant = 'default',
  enableTooltip = false,
  tooltipContainer,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (val: number) => {
    if (!isNaN(val)) {
      setInputValue(val);
      onChange?.(val);
    }
  };

  const getThumbClasses = (size: string) => {
    switch (size) {
      case 'small':
        return '[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4';
      case 'medium':
        return '[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6';
      case 'large':
        return '[&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8';
      default:
        return '[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4';
    }
  };

  return (
    <div
      className={twMerge(
        enableVertical ? base.verticalInputContainerStyle : base.inputContainerStyle,
        className
      )}
    >
      {/* Background Track */}
      <div
        className={twMerge(
          enableVertical ? base.verticalBackgroundStyle : base.backgroundStyle,
          sizeVariants[size] [enableVertical ? "vertical" : "horizontal"],
          'pointer-events-none',
          backgroundClass,
          disabled && base.disable,
        )}
      />

      {/* Filled Track */}
      <div
        className={twMerge(
          enableVertical ? base.verticalFilledStyle : base.filledStyle,
          sizeVariants[size] [enableVertical ? "vertical" : "horizontal"],
          'pointer-events-none',
          filledClass,
          disabled && base.disable,
        )}
        style={
          enableVertical
            ? { height: `${inputValue}%` }
            : { width: `${inputValue}%` }
        }
      />

      {/* Slider Input */}
      <input
        type="range"
        min={0}
        max={100}
        value={inputValue}
        onChange={(e) => handleChange(parseInt(e.target.value))}
        onInput={(e) => handleChange(parseInt((e.target as HTMLInputElement).value))}
        className={twMerge(
          enableVertical ? base.verticalInputStyle : base.inputStyle,
          !disabled ? "cursor-pointer" : "",
          '[&::-webkit-slider-thumb]:appearance-none',
          '[&::-webkit-slider-thumb]:bg-white',
          '[&::-webkit-slider-thumb]:rounded-full',
          '[&::-moz-range-thumb]:rounded-full',
          getThumbClasses(size),
          "custom-thumb z-30"
        )}
        style={{
          ['--thumb-color' as any]: thumbColor,
          ['--thumb-shadow-color' as any]: disabled ? 'transparent' : `${thumbColor}80`,
        }}
        step={steps}
        disabled={!!disabled}
      />

      {/* Tooltip */}
      {(!disabled && enableTooltip) && (
        <div
          className={twMerge(
            base.tooltipBase,
            (!enableVertical && tooltipPosition) === "top" ?  base.tooltipTop : 
            (!enableVertical && tooltipPosition) === "bottom" ? base.tooltipBottom: "",
            tooltipVariants[tooltipVariant],
            enableVertical ? 'left-[-2rem] flex flex-col items-center' : '',
            tooltipContainer,
          )}
          style={
            enableVertical
              ? { bottom: `${inputValue}%` }
              : { left: `${inputValue}%` }
          }
        >
          <Tooltip tooltipVariant={tooltipVariant}>
            {inputValue}
          </Tooltip>
        </div>
      )}

      {steps && (
        <div
          className={twMerge(
            `absolute pointer-events-none z-20`,
            enableVertical
              ? 'left-1/2 bottom-0 h-full flex flex-col-reverse justify-between -translate-x-1/2'
              : 'top-1/2 w-full flex justify-between -translate-y-1/2'
            )}
        >
          {Array.from({ length: Math.floor(100 / Number(steps)) + 1 }).map((_, i) => {
            const tickValue = i * Number(steps);
            const isFilled = tickValue <= inputValue;
            return <Tick filled={isFilled} key={i} />;
          })}
        </div>
      )}
    </div>
  );
};

const Icons: FC<SnakeIconProps> = ({ 
  className, 
  children 
}) => {
  return <div className={className}>{children}</div>;
};

const Tick: FC<SnakeTickProps> = ({ 
  className, 
  filled, 
  beforeFilled = 'bg-black', 
  afterFilled = 'bg-white' 
}) => (
  <div className={twMerge(`w-[4px] h-1 z-20 rounded-sm`, filled ? beforeFilled : afterFilled, className)} /> 
);

const Tooltip: FC<TooltipProps> = ({
  children,
  className,
}) => {
  return (
      <div className={className}>{children}</div>
  );
}

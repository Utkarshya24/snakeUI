import { SnakeSlider } from '@/src/components'
import React from 'react'

const Slider = () => {
    return (
        <div className='w-full h-full grid grid-cols-2 gap-4 p-4'>

            <div className='flex justify-center p-8 w-1/2 mx-auto'>
                <SnakeSlider />
            </div>

            <div className='flex justify-center p-8 w-1/2 mx-auto'>
                <SnakeSlider 
                    enableIcons
                    enableTooltip
                    tooltipVariant='squared'
                    tooltipPosition='bottom'
                />
            </div>
            <div className=' flex justify-center p-8 w-1/2 mx-auto'>
                <SnakeSlider 
                    enableIcons
                    enableVertical
                    enableTooltip
                />
            </div>
            <div className=' flex justify-center p-8 w-1/2 mx-auto'>
                <SnakeSlider 
                    enableIcons
                    variantType='withInput'
                    enableVertical
                    enableTooltip
                    tooltipVariant='rounded'
                />
            </div>
            <div className=' flex justify-center p-8 w-1/2 mx-auto'>
                <SnakeSlider 
                    enableIcons
                    variantType='withInput'
                    enableTooltip
                    tooltipVariant='roundedFull'
                />
            </div>
            <div className=' flex justify-center p-8 w-1/2 mx-auto'>
                <SnakeSlider 
                    enableIcons
                    enableTooltip
                    tooltipVariant='outline'
                />
            </div>
            <div className=' flex justify-center p-8 w-1/2 mx-auto'>
                <SnakeSlider 
                    enableIcons
                    enableTooltip
                    tooltipVariant='outline'
                    disabled
                />
            </div>
            <div className=' flex justify-center p-8 w-1/2 mx-auto'>
                <SnakeSlider 
                    enableIcons
                    enableTooltip
                    tooltipVariant='outline'
                    enableSteps
                />
            </div>
            <div className=' flex justify-center p-8 w-1/2 mx-auto'>
                <SnakeSlider 
                    enableIcons
                    enableTooltip
                    enableSteps
                    size="medium"
                />
            </div>
            <div className=' flex justify-center p-8 w-1/2 mx-auto'>
                <SnakeSlider 
                    enableIcons
                    enableTooltip
                    tooltipVariant='outline'
                    enableSteps
                    size="large"
                    tooltipContainer='bottom-10'
                />
            </div>
            <div className=' flex justify-center p-8 w-1/2 mx-auto'>
                <SnakeSlider 
                    enableIcons
                    enableTooltip
                    tooltipVariant='outline'
                    enableSteps
                    steps={20}
                    tooltipContainer='bottom-10'
                />
            </div>
            <div className=' flex justify-center p-8 w-1/2 mx-auto'>
                <SnakeSlider 
                    enableIcons
                    enableTooltip
                    tooltipVariant='outline'
                    enableSteps
                    steps={5}
                    tooltipContainer='bottom-10'
                />
            </div>
        </div>
    )
}

export default Slider
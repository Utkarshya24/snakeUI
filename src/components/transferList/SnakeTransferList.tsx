"use client"

import React, {useEffect, useState} from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import Button from '../Button';

interface baseProps {
    className?: string;
    children?: React.ReactNode;
}
interface listProps {
    className?: string;
    children: React.ReactNode[];
    onSelectionChange?: (selectedItems: any[]) => void;
}

interface listWraperProps {
    slot: "left" | "right",
    children: React.ReactNode[],
}

const base = {
    grid: `w-[250px] h-auto bg-secondary text-primary-text px-2 py-4`,
    listContainer: `text-xl flex flex-col gap-2`,
    snakeTransferList: `flex justify-center items-center gap-8`,
    button: `py-2 px-6`,
}

const buttonArray = [
    <MdKeyboardDoubleArrowRight />,
    <MdKeyboardArrowRight />,
    <MdKeyboardArrowLeft />,
    <MdKeyboardDoubleArrowLeft />,
]


export const SnakeTransferList: React.FC<baseProps> = ({className, children}) => {

    // const [selectedFromLeft, setSelectedFromLeft] = useState<any[]>([])
    // const [selectedFromRight, setSelectedFromRight] = useState<any[]>([])

    // const handleClick = () => {
    //     console.log("Selected from Left List:", selectedFromLeft);
    //     console.log("Selected from Right List:", selectedFromRight);
    // }

    return (
        <div className={`${base.snakeTransferList} $
        {className}`}>
            <Grid>
                <List
                >
                    {`its the 1`}
                    {`its the 2`}
                    {`its the 3`}
                    {`its the 4`}
                </List>
            </Grid>

            <div 
                className='flex flex-col gap-2'
            >
                <Button className={`${base.button}`} >
                    <MdKeyboardArrowRight />
                </Button>
            </div>

            <Grid>
                <List
                >
                    {`its the 1`}
                    {`its the 2`}
                    {`its the 3`}
                    {`its the 4`}
                </List>
            </Grid>
        </div>
    )
}

export const Grid: React.FC<baseProps> = ({className = '', children}) => {
    return (
    <div className={`${base.grid} ${className}`}>
        {children}
    </div>
    )
}

export const ListWrapper: React.FC<listWraperProps> = ({children}) => {
    return <>{children}</>
}

export const List: React.FC<listProps> = ({className = '', children, onSelectionChange}) => {

    const [checkedItems, setCheckedItems] = useState<boolean[]>(
        new Array(children.length).fill(false)
    )

    useEffect(() => {
        setCheckedItems(new Array(children.length).fill(false));
    }, [children])

    useEffect(() => {
        if(onSelectionChange) {
            const selectedItems = children.filter((_, index) => checkedItems[index]);
            onSelectionChange(selectedItems)
        }
    }, [checkedItems])

    const toggleCheck = (index:number) => {
        setCheckedItems(prev => prev.map((val, i) => (i === index ? !val: val))
    )}

    return (
            <ul className={`${base.listContainer} ${className}`}>
                {children.map((item, index) => (
                    <div 
                        className='flex justify-center items-center gap-4 cursor-pointer w-full  hover:bg-primary'
                        onClick={() => toggleCheck(index)}
                        key={index}
                    >
                        {checkedItems[index] ? <IoIosCheckbox /> : <MdCheckBoxOutlineBlank /> }
                        <li>{item}</li>
                    </div>
                ))}
            </ul>
    )
}
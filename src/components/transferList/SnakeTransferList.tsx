"use client"

import { useState, ReactNode, FC } from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import Button from '../button';
import { twMerge } from 'tailwind-merge';

type TransferItem = {
    id: string | number;
    content: ReactNode;
};

type TransferListProps = {
    initialLeft: TransferItem[];
    initialRight: TransferItem[];
    gridClassName?: string;
    buttonClassName?: string;
    listClassName?: string;
    listContainerClassName?: string;
    buttonContainerClassName?: string;
    listCheckBoxClassName?: string;
    variants?: "solid" | "outline" | "shadow" | "glowing" | "default" | "bordered" | "glass" | "hoverZoom";
};

type ListBoxProps = {
    items: TransferItem[];
    selected: (string | number)[];
    onToggle: (id: string | number) => void;
    listClassName?: string;
    listContainerClassName?: string;
    listCheckBoxClassName?: string;
    variants?: "solid" | "outline" | "shadow" | "glowing" | "default" | "bordered" | "glass" | "hoverZoom";
};

const base = {
    grid: `flex items-center justify-center space-x-4 p-4`,
    buttonContainer: `flex flex-col gap-2`,
    button: `py-1 px-6`,
    listContainer: `p-4 w-56`,
    list: `flex items-center cursor-pointer px-2`,
    listCheckBox: `mr-2 border-2 border-gray-300 rounded-md`,
}

const variatnsStyle = {
    default: `shadow-sm shadow-secondary/50`,
    solid: `bg-primary/80`,
    outline: `border border-secondary bg-secondary/20`,
    shadow: `shadow-lg shadow-black/50 bg-secondary/40`,
    glass: ` bg-gray-400/50 backdrop-blur-md`,
    glowing: `shadow-[0_0_30px_rgba(74,222,128,0.9)]`,
    bordered: `border-2 border-secondary`,
    hoverZoom: ``
}

const variatnsListStyle = {
    default: `hover:shadow-sm hover:shadow-secondary/50 translate-1 ease-in-out duration-200`,
    solid: `hover:bg-secondary/50 text-primary-text translate-1 ease-in-out duration-200`,
    outline: `hover:bg-primary/20 backdrop-blur-md translate-1 ease-in-out duration-200`,
    shadow: `hover:shadow-sm hover:shadow-black/50 translate-1 ease-in-out duration-200`,
    glass: ` hover:bg-white/40 hover:backdrop-blur-md hover:text-primary-text translate-1 ease-in-out duration-200`,
    glowing: `hover:shadow-[0_0_5px_rgba(74,222,128,0.5)] translate-1 ease-in-out duration-200`,
    bordered: `hover:border hover:border-secondary`,
    hoverZoom: `hover:text-xl translate-1 ease-in-out duration-200`
}

export default function SnakeTransferList({
    initialLeft, 
    initialRight,
    gridClassName = '', 
    buttonClassName = '',
    listClassName = '',
    listContainerClassName = '',
    buttonContainerClassName = '',
    listCheckBoxClassName = '',
    variants= "default",
    }: TransferListProps) {
    const [leftItems, setLeftItems] = useState<TransferItem[]>(initialLeft);
    const [rightItems, setRightItems] = useState<TransferItem[]>(initialRight);
    const [selectedLeft, setSelectedLeft] = useState<(string | number)[]>([]);
    const [selectedRight, setSelectedRight] = useState<(string | number)[]>([]);

    const handleToggle = (id: string | number, side: 'left' | 'right') => {
        const toggle = (selected: (string | number)[], id: string | number) =>
        selected.includes(id) ? selected.filter(i => i !== id) : [...selected, id];

        if (side === 'left') setSelectedLeft(toggle(selectedLeft, id));
        else setSelectedRight(toggle(selectedRight, id));
    };

    const moveItems = (
        fromItems: TransferItem[],
        toItems: TransferItem[],
        selected: (string | number)[],
        setFrom: (items: TransferItem[]) => void,
        setTo: (items: TransferItem[]) => void,
        setSelected: (selected: (string | number)[]) => void
    ) => {
        const moving = fromItems.filter(item => selected.includes(item.id));
        const remaining = fromItems.filter(item => !selected.includes(item.id));
        setTo([...toItems, ...moving]);
        setFrom(remaining);
        setSelected([]);
    };

    const moveAll = (
        fromItems: TransferItem[],
        toItems: TransferItem[],
        setFrom: (items: TransferItem[]) => void,
        setTo: (items: TransferItem[]) => void
    ) => {
        setTo([...toItems, ...fromItems]);
        setFrom([]);
    };

    return (
        <div className={twMerge(
            base.grid,
            gridClassName,
        )}>
            <ListBox
                items={leftItems}
                selected={selectedLeft}
                onToggle={id => handleToggle(id, 'left')}
                listClassName={`${listClassName}`}
                listContainerClassName={`${listContainerClassName}`}
                listCheckBoxClassName={`${listCheckBoxClassName}`}
                variants={variants}
            />
            <div className={`${base.buttonContainer} ${buttonContainerClassName}`}>
                <Button 
                    onClick={() => moveAll(leftItems, rightItems, setLeftItems, setRightItems)} 
                    className={`${base.button} ${buttonClassName}`}>
                        <MdKeyboardDoubleArrowRight />
                </Button>
                <Button 
                    onClick={() => moveItems(leftItems, rightItems, selectedLeft, setLeftItems, setRightItems, setSelectedLeft)} 
                    className={`${base.button} ${buttonClassName} ${buttonClassName}`}>
                        <MdKeyboardArrowRight />
                </Button>
                <Button 
                    onClick={() => moveItems(rightItems, leftItems, selectedRight, setRightItems, setLeftItems, setSelectedRight)} 
                    className={`${base.button} ${buttonClassName}`}>
                        <MdKeyboardArrowLeft />
                </Button>
                <Button 
                    onClick={() => moveAll(rightItems, leftItems, setRightItems, setLeftItems)} 
                    className={`${base.button} ${buttonClassName}`}>
                        <MdKeyboardDoubleArrowLeft />
                </Button>
            </div>
            <ListBox
                items={rightItems}
                selected={selectedRight}
                onToggle={id => handleToggle(id, 'right')}
                listClassName={`${listClassName}`}
                listContainerClassName={`${listContainerClassName}`}
                listCheckBoxClassName={`${listCheckBoxClassName}`}
                variants={variants}
            />
        </div>
    );
}

const ListBox: FC<ListBoxProps> = ({
    items, 
    selected, 
    onToggle,
    listClassName = '',
    listContainerClassName = '',
    listCheckBoxClassName = '',
    variants= "outline" 
}) => {
    return (
        <div className={twMerge(
            base.listContainer,
            variatnsStyle[variants],
            listContainerClassName,
        )}>
            {items.length === 0 && <div className="text-center">No items</div>}
                {items.map(item => (
                <div 
                    key={item.id} 
                    className={twMerge(
                        base.list,
                        variatnsListStyle[variants],
                        listClassName,
                    )}
                    onClick={() => onToggle(item.id)}
                >
                    <input
                        type="checkbox"
                        checked={selected.includes(item.id)}
                        className={`${base.listCheckBox} ${listCheckBoxClassName}`}
                        onChange={() => onToggle(item.id)}
                    />
                    <span>
                        {item.content}
                    </span>
                </div>
                ))}
        </div>
    );
}

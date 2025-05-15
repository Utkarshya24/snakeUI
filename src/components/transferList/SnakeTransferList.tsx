"use client"

import { useState, ReactNode } from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import Button from '../button';

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
};

const base = {
    grid: `flex items-center justify-center space-x-4 p-4 bg-primary/50 text-primary-text`,
    buttonContainer: `flex flex-col gap-2`,
    button: `py-1 px-6`,
    listContainer: `bg-secondary p-4 w-56`,
    list: `flex items-center cursor-pointer hover:bg-primary px-2`,
    listCheckBox: `mr-2 border-2 border-gray-300 rounded-md`
}

export default function SnakeTransferList({
    initialLeft, 
    initialRight,
    gridClassName = '', 
    buttonClassName = '',
    listClassName = '',
    listContainerClassName = '',
    buttonContainerClassName = '',
    listCheckBoxClassName = ''
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
        <div className={`${base.grid} ${gridClassName}`}>
            <ListBox
                items={leftItems}
                selected={selectedLeft}
                onToggle={id => handleToggle(id, 'left')}
                listClassName={`${listClassName}`}
                listContainerClassName={`${listContainerClassName}`}
                listCheckBoxClassName={`${listCheckBoxClassName}`}
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
            />
        </div>
    );
}

type ListBoxProps = {
    items: TransferItem[];
    selected: (string | number)[];
    onToggle: (id: string | number) => void;
    listClassName?: string;
    listContainerClassName?: string;
    listCheckBoxClassName?: string;
};

function ListBox({
    items, 
    selected, 
    onToggle,
    listClassName = '',
    listContainerClassName = '',
    listCheckBoxClassName = ''
}: ListBoxProps) {
    return (
        <div className={`${base.listContainer} ${listContainerClassName}`}>
            {items.length === 0 && <div className="text-center">No items</div>}
                {items.map(item => (
                <div 
                    key={item.id} 
                    className={`${base.list} ${listClassName}`}
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

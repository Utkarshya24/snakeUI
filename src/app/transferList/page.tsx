import { SnakeTransferList } from '@/src/components'
import React from 'react'

const TransferList = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center'>
            <SnakeTransferList
                initialLeft={[
                    {id:1, content: <span>Apple</span> },
                    {id:2, content: <span>Banana</span> },
                    {id:3, content: <span>Apple1</span> },
                    {id:4, content: <span>Banana2</span> },
                ]}
                initialRight={[
                    {id:5,content: <span>Grapes</span> },
                    {id:6,content: <span>Watermelon</span> },
                    {id:7,content: <span>Grapes1</span> },
                    {id:8,content: <span>Watermelon2</span> },
                ]}
            />
            <SnakeTransferList
                initialLeft={[
                    {id:1, content: <span>Apple</span> },
                    {id:2, content: <span>Banana</span> },
                    {id:3, content: <span>Apple1</span> },
                    {id:4, content: <span>Banana2</span> },
                ]}
                initialRight={[
                    {id:5,content: <span>Grapes</span> },
                    {id:6,content: <span>Watermelon</span> },
                    {id:7,content: <span>Grapes1</span> },
                    {id:8,content: <span>Watermelon2</span> },
                ]}
                variants='outline'
            />
            <SnakeTransferList
                initialLeft={[
                    {id:1, content: <span>Apple</span> },
                    {id:2, content: <span>Banana</span> },
                    {id:3, content: <span>Apple1</span> },
                    {id:4, content: <span>Banana2</span> },
                ]}
                initialRight={[
                    {id:5,content: <span>Grapes</span> },
                    {id:6,content: <span>Watermelon</span> },
                    {id:7,content: <span>Grapes1</span> },
                    {id:8,content: <span>Watermelon2</span> },
                ]}
                variants='shadow'
            />
            <SnakeTransferList
                initialLeft={[
                    {id:1, content: <span>Apple</span> },
                    {id:2, content: <span>Banana</span> },
                    {id:3, content: <span>Apple1</span> },
                    {id:4, content: <span>Banana2</span> },
                ]}
                initialRight={[
                    {id:5,content: <span>Grapes</span> },
                    {id:6,content: <span>Watermelon</span> },
                    {id:7,content: <span>Grapes1</span> },
                    {id:8,content: <span>Watermelon2</span> },
                ]}
                variants='glowing'
            />
            <SnakeTransferList
                initialLeft={[
                    {id:1, content: <span>Apple</span> },
                    {id:2, content: <span>Banana</span> },
                    {id:3, content: <span>Apple1</span> },
                    {id:4, content: <span>Banana2</span> },
                ]}
                initialRight={[
                    {id:5,content: <span>Grapes</span> },
                    {id:6,content: <span>Watermelon</span> },
                    {id:7,content: <span>Grapes1</span> },
                    {id:8,content: <span>Watermelon2</span> },
                ]}
                variants='solid'
            />
            <SnakeTransferList
                initialLeft={[
                    {id:1, content: <span>Apple</span> },
                    {id:2, content: <span>Banana</span> },
                    {id:3, content: <span>Apple1</span> },
                    {id:4, content: <span>Banana2</span> },
                ]}
                initialRight={[
                    {id:5,content: <span>Grapes</span> },
                    {id:6,content: <span>Watermelon</span> },
                    {id:7,content: <span>Grapes1</span> },
                    {id:8,content: <span>Watermelon2</span> },
                ]}
                variants='bordered'
            />
            <SnakeTransferList
                initialLeft={[
                    {id:1, content: <span>Apple</span> },
                    {id:2, content: <span>Banana</span> },
                    {id:3, content: <span>Apple1</span> },
                    {id:4, content: <span>Banana2</span> },
                ]}
                initialRight={[
                    {id:5,content: <span>Grapes</span> },
                    {id:6,content: <span>Watermelon</span> },
                    {id:7,content: <span>Grapes1</span> },
                    {id:8,content: <span>Watermelon2</span> },
                ]}
                variants='glass'
            />
            <SnakeTransferList
                initialLeft={[
                    {id:1, content: <span>Apple</span> },
                    {id:2, content: <span>Banana</span> },
                    {id:3, content: <span>Apple1</span> },
                    {id:4, content: <span>Banana2</span> },
                ]}
                initialRight={[
                    {id:5,content: <span>Grapes</span> },
                    {id:6,content: <span>Watermelon</span> },
                    {id:7,content: <span>Grapes1</span> },
                    {id:8,content: <span>Watermelon2</span> },
                ]}
                variants='hoverZoom'
            />
        </div>
    )
}

export default TransferList
import { SnakeAlert } from '@/src/components'
import React from 'react'
import { CiBookmarkCheck } from "react-icons/ci";
import { ImUndo2 } from "react-icons/im";
import { BiAnalyse } from "react-icons/bi";

const alerts = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center px-20'>
            <div className='flex flex-col justify-center gap-5 py-10'>
                <SnakeAlert>
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    type='info'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    type='warning'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    type='error'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>

                theme default
            </div>


            <div className='flex flex-col gap-5 py-10'>
                <SnakeAlert
                    theme="light"
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="light"
                    type='info'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="light"
                    type='warning'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="light"
                    type='error'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                theme light
            </div>

            <div className='flex flex-col gap-5 py-10'>
                <SnakeAlert
                    theme="outline"
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="outline"
                    type='info'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="outline"
                    type='warning'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="outline"
                    type='error'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>

                theme outline
            </div>

            <div className='flex flex-col gap-5 py-10'>
                <SnakeAlert
                    theme="bordered"
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="bordered"
                    type='info'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="bordered"
                    type='warning'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="bordered"
                    type='error'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>

                theme bordered
            </div>

            <div className='flex flex-col gap-10 py-10'>
                <SnakeAlert
                    theme='glowing'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme='glowing'
                    type='info'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme='glowing'
                    type='warning'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="glowing"
                    type='error'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>

                theme glowing
            </div>

            <div className='flex flex-col gap-5 py-10'>
                <SnakeAlert
                    enableShadow
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme='light'
                    type='info'
                    enableShadow
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme='outline'
                    type='warning'
                    enableShadow
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="bordered"
                    type='error'
                    enableShadow
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>

                enable shadow
            </div>

            <div className='flex flex-col gap-5 py-10'>
                <SnakeAlert
                    theme="outline"
                    enableTitle
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="outline"
                    type='info'
                    enableTitle
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="outline"
                    type='warning'
                    enableTitle
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    theme="outline"
                    type='error'
                    enableTitle
                    enableAction
                >
                    Here is a gentle confirmation that your action was ashwini.
                </SnakeAlert>
                Enable Title
            </div>

            <div className='flex flex-col gap-5 py-10'>
                <SnakeAlert>
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                default

                <SnakeAlert
                    disableIcon={true}
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                disableIcon

                <SnakeAlert
                    customIcon= {<CiBookmarkCheck/>}
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                customIcon
            </div>

            <div className='flex flex-col justify-center gap-5 py-10'>
                <SnakeAlert
                    enableAction
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    type='info'
                    enableAction
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    type='warning'
                    enableAction
                    actionStyle='py-2'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    type='error'
                    enableAction
                    actionStyle='py-2'
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>

                Enable Action
            </div>

            <div className='flex flex-col justify-center gap-5 py-10'>
                <SnakeAlert
                    enableCollapse
                    enableAction
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    type='info'
                    enableAction
                    enableCollapse
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    type='warning'
                    enableAction
                    enableCollapse
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                <SnakeAlert
                    type='error'
                    enableAction
                    enableCollapse
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>

                Enable Collapse
            </div>

            <div className='flex flex-col justify-center gap-5 py-10'>
                <SnakeAlert
                    enableCollapse
                    enableAction
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                default

                <SnakeAlert
                    enableCollapse
                    enableAction
                    customAction={<ImUndo2/>}
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                customAction

                <SnakeAlert
                    enableCollapse
                    enableAction
                    customUndoAction={<BiAnalyse/>}
                >
                    Here is a gentle confirmation that your action was successful.
                </SnakeAlert>
                customUndoAction
            </div>

        </div>
    )
}

export default alerts
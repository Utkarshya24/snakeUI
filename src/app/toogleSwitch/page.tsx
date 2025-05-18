import React from 'react'
import { ToogleSwitch as ToogleSwitchBtn } from '@/src/components'

const ToogleSwitch = () => {
    return (
        <div className='p-20 grid grid-cols-3 gap-20'>

            <div>
                <ToogleSwitchBtn/>
                <p>default</p>
            </div>
            <div>
                <ToogleSwitchBtn
                    defaultChecked
                />
                <p>default Checked</p>
            </div>
            <div>
                <ToogleSwitchBtn
                    enableIconSwitch
                />
                <p>enable Icon Switch</p>
            </div>

            <div>
                <p>label bottom</p>
                <ToogleSwitchBtn
                    labelPosition='bottom'
                />
            </div>
            <div>
                <ToogleSwitchBtn
                    enableCheckmark
                />
                <p>enable Checkmark</p>
            </div>
            <div>
                <ToogleSwitchBtn
                    disabled
                />
                <p>disabled</p>
            </div>

            <div>
                <ToogleSwitchBtn
                    labelPosition='right'
                />
                <p>label right</p>
            </div>
            <div>
                <ToogleSwitchBtn
                    labelPosition='left'
                />
                <p>label left</p>
            </div>
            <div>
                <ToogleSwitchBtn
                    enableCheckmark
                    enableIconSwitch
                />
                <p>enable Checkmark + enable Icon Switch </p>
            </div>
        </div>
    )
}

export default ToogleSwitch
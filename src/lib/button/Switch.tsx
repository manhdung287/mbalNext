import { Switch } from 'antd';
import React from 'react'

interface IProps {
    defaultChecked?: boolean
    onChange: (checked: boolean) => void
    label?: string
    className?:string
}

function ButtonSwitch({ defaultChecked, onChange, label,className }: IProps) {

    return (
        <div className={className}>
            <Switch defaultChecked={defaultChecked} onChange={onChange} />
            {label ? <span className='label_switch'>{label}</span> : null}
        </div>

    )
}

export default ButtonSwitch
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React from 'react'

interface IProps {
    label: string
    onChange: (e: CheckboxChangeEvent) => void
    defaultChecked?: boolean
}

function CheckBox({ label, onChange, defaultChecked }: IProps) {

    return (
        <Checkbox defaultChecked={defaultChecked} onChange={onChange}>{label || 'Label'}</Checkbox>
    )
}

export default CheckBox
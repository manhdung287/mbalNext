import { InputNumber, Space } from 'antd';

import React from 'react'

interface IProps {
    value?: number | string
    onChange: (e: number | string) => void
    prefix?:string
    suffix?:string
}

function InputNumberComponent({ value, onChange, }: IProps) {
    return (
        <InputNumber
            defaultValue={1}
            formatter={value => `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value!.replace(/\$\s?|(,*)/g, '')}
            onChange={onChange}
            value={value}
        />
    )
}

export default InputNumberComponent
import { Checkbox, Form } from 'antd'
import React from 'react'
interface IProps {
    label?: string
    name: string
    required?: boolean
    message?: string
    valuePropName?: any
    wrapperCol?:any
}

function CheckBoxEditor({ name,label, valuePropName, wrapperCol = { offset: 8, span: 16 } }:IProps) {
    return (
        <Form.Item name={name} valuePropName={valuePropName} wrapperCol={wrapperCol}>
            <Checkbox>{label}</Checkbox>
        </Form.Item>
    )
}

export default CheckBoxEditor
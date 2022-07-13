import React from 'react'
import { Form, Input } from 'antd';

interface IProps {
    label?: string
    name: string
    required?: boolean
    message?: string
    placeholder?: string
    className?: string
    prefix?: any
    suffix?: any
    wrapperCol?: object
    type?: string
}

function TextEditor({ label, name, type, prefix, suffix, className, placeholder, wrapperCol, required, message = 'Please fill input' }: IProps) {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[{ required: required, message: message }]}
            wrapperCol={wrapperCol}
        >
            <Input suffix={suffix} prefix={prefix} placeholder={placeholder || label} type={type || 'text'}
                className={'input ' + className} />
        </Form.Item>
    )
}

export default TextEditor
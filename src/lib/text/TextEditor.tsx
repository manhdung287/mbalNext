import React from 'react'
import { Form, Input } from 'antd';
interface IProps {
    label?: string
    name: string
    required?: boolean
    message?: string
    placeholder?: string
    className?:string
    
}

function TextEditor({ label, name, className,placeholder, required, message = 'Please fill input' }: IProps) {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[{ required: required, message: message }]}
        >
            <Input placeholder={placeholder || label} className={className} />
        </Form.Item>
    )
}

export default TextEditor
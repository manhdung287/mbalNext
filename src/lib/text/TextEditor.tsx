import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
interface IProps {
    label?: string
    name: string
    required?: boolean
    message?: string
}

function TextEditor({ label, name, required, message='Please fill input' }: IProps) {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[{ required: required, message: message }]}
        >
            <Input />
        </Form.Item>
    )
}

export default TextEditor
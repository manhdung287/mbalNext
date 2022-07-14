import React from 'react'
import { Input, Form } from 'antd';
const { TextArea } = Input;

interface IProps {
    placeholder?: string
    autoSize?: object
    className?: string
}

function TextAreaform({ placeholder, className ,autoSize}: IProps) {
    return (
        <Form.Item>
            <TextArea
                placeholder={placeholder || "Autosize height with minimum and maximum number of lines"}
                autoSize={autoSize||{ minRows: 2, maxRows: 6 }}
                className={className}
            />
        </Form.Item>
    )
}

export default TextAreaform
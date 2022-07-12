import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
interface IProps {
    wrapperCol?: any,
    text: string,
    type?: string | any,
    htmlType?: "button" | "submit" | "reset" | undefined
    color?:string
}

function ButtonForm({ color,htmlType = "button", type = 'primary', text = 'Xác nhận', wrapperCol = { offset: 8, span: 16 } }: IProps) {
    return (

        <Form.Item wrapperCol={wrapperCol}>
            <Button type={type} htmlType={htmlType} color={color}>
                {text}
            </Button>
        </Form.Item>

    )
}

export default ButtonForm;
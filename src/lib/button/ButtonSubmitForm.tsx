import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
interface IProps {
    wrapperCol?: any,
    text: string
}

function ButtonSubmitForm({ text = 'Xác nhận', wrapperCol = { offset: 8, span: 16 } }: IProps) {
    return (

        <Form.Item wrapperCol={wrapperCol}>
            <Button type="primary" htmlType="submit">
                {text}
            </Button>
        </Form.Item>

    )
}

export default ButtonSubmitForm
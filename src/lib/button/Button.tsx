import React from 'react'
import { Button } from 'antd'

interface IProps {
    text: string
    onClick: () => void
    title?: string
    icon?: any
    background?: string
    className?: string
    classNameLabel?: string
    loading?: boolean
}

function ButtonBase({ className, classNameLabel, text, onClick, title, icon, background = '#ffffff', loading }: IProps) {
    return (
        <Button style={{ backgroundColor: background }}
            onClick={onClick} title={title} icon={icon}
            className={' btn ' + className}
            loading={loading}
        >
            <span className={classNameLabel}>{text}</span>
        </Button>
    )
}

export default ButtonBase
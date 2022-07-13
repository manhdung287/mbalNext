import TextEditor from 'lib/input/TextEditor'
import React from 'react'

interface IProps {
    label?: string
    name: string
    required?: boolean
    message?: string
    className?: string
    placeholder?: string
    prefix?: any
    suffix?: any
    wrapperCol?: object
    classNameLabel?:string
    type?: string
}

function Input({ label, prefix, suffix, name, required = true, type,
     wrapperCol,placeholder, className,classNameLabel, message  }: IProps) {
    return (
        <div className='input-wrapper'>
            {label ? <p className={'label_input '+ classNameLabel}>{label}</p> : null}
            <div className='input-container'>
                <TextEditor placeholder={placeholder} wrapperCol={wrapperCol} prefix={prefix} suffix={suffix} name={name} message={message} required={required} className={className} type={type} />
            </div>

        </div>
    )
}

export default Input
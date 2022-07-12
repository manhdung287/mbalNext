import TextEditor from 'lib/text/TextEditor'
import React from 'react'

interface IProps {
    label?: string
    name: string
    required?: boolean
    message?: string
    icon?: any
    className?: string
    placeholder?:string
}

function Input({ label, name, required = true, placeholder,className, message = 'Vui lòng nhập', icon }: IProps) {
    return (
        <div className='input-wrapper'>
            {label ? <p>{label}</p> : null}
            {
                icon ? <div className='input-icon-container'>
                    {icon}
                    <TextEditor name={name} message={message} required={required} className={className} placeholder={placeholder}/>
                </div> : <div className='input-container'>
                    <TextEditor name={name} message={message} required={required} className={className} />
                </div>
            }

        </div>
    )
}

export default Input
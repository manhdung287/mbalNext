import React from 'react'

interface IProps {
  value: any
  suffix?: boolean
  prefix?: boolean
  currency: string
  className?: string
}

function TextPrice({ value, suffix, prefix, currency, className }: IProps) {
  return (
    <p className={'text_price ' + className}>
      {prefix && currency}
      <span>{value}</span>
      {suffix && currency}
    </p>
  )
}

export default TextPrice
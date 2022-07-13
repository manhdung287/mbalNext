import React from 'react'
import { Modal } from 'antd'

interface IProps {
  visible: boolean
  onOk: () => void
  onCancel: () => void
  okText?: string
  cancelText?: string
  children: any
  title?:string
}

function index({ visible, onOk, onCancel, okText='Ok', cancelText='Cancel', children,title='Modal' }:IProps) {
  return (
    <Modal
      visible={visible }
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      title={title}
    >
      {children}
    </Modal>
  )
}

export default index
import React from 'react'
import { Modal } from 'antd'

interface IProps {
  visible: boolean
  onOk: () => void
  onCancel: () => void
  okText: string
  cancelText: string
  children: any
}

function ModalQuestion({ visible, onOk, onCancel, okText, cancelText, children }:IProps) {
  return (
    <Modal
      visible={visible }
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}

    >
      {children}
    </Modal>
  )
}

export default ModalQuestion
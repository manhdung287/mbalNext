import React from 'react'
import { Col, Divider, Form, Row } from 'antd';
import HumanIcon from 'src/styles/images';
import Input from 'lib/input';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
function index() {

  const onFilishForm = (values: any) => {

  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login_page'>
      <p>Xin chào!</p>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFilishForm}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Input
          name='name'
          placeholder='Tên đăng nhập'
          icon={<HumanIcon />}
          label='Tên đăng nhập'
        />
        <Input
          name='name2'
          placeholder='Tên đăng nhập'
          label='Tên đăng nhập'
        />
      </Form>
        <i className="fa-solid fa-circle-plus fa-beat"></i>
        <i className="fa-solid fa-heart fa-beat"></i>
        <i className="fa-solid fa-heart fa-beat"   ></i>
        <i className="fa-solid fa-heart fa-beat" ></i>
        <i className="fa-solid fa-heart fa-beat"  ></i>
     
    </div>
  )
}

export default index
import React from 'react'
import { Form } from 'antd';
import HumanIcon from 'src/styles/images';
import Input from 'lib/input';
import { APIGet, APIPost, APIPut } from 'config/ProcessAPI';
import ButtonBase  from 'lib/button/Button';

function index() {

  const onFilishForm = (values: any) => {

  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onClick = async () => {
    const testGet = await APIPut('/sx', { s: 'sssn' }, 'adhasjhdasjdajsdhakjda');
    console.log(testGet);
  }
  return (
    <div className='login_page'>
      <p>Xin chào!</p>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ name2: 'name2' }}
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
      <ButtonBase text='Click' onClick={onClick} background='red' />
      <ButtonBase text='Click' onClick={onClick} icon={ <i className="fa-solid fa-address-book"></i>} />
    </div>
  )
}

export default index
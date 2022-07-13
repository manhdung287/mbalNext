import React, { useState } from 'react'
import { Form } from 'antd';
import HumanIcon from 'src/styles/images';
import Input from 'lib/input';
import { APIGet, APIPost, APIPut } from 'config/ProcessAPI';
import { useRouter } from 'next/router';
import { ROUTERS } from 'routers/Routers';
import ButtonForm from 'lib/button/ButtonForm';

function index() {
  const router = useRouter();

  const [showPassword, setShowPassWord] = useState(false);

  const onShowPassword = () => {
    setShowPassWord(!showPassword);
  }
  const onFilishForm = (values: any) => {
    console.log(values)
    document.cookie = `value=${values.name}`;
    router.push(ROUTERS.LANDING)
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

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ name2: 'name2' }}
        onFinish={onFilishForm}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className='form_login'
      >
        <p className='label_login'>Wellcome!</p>
        <img alt='man' src='/imgs/man.jpg' width={150} height={150} className='img_login' />
        <Input
          name='name'
          placeholder='Your Name Account'
          label='Account'
          wrapperCol={{ span: 24 }}
          className='input_form_login'
          
        />
        <Input
          name='password'
          placeholder=' Your password '
          wrapperCol={{ span: 24 }}
          className='input_form_login'
          type={showPassword ? 'text' : 'password'}
          suffix={showPassword ? <i className="fa-regular fa-eye-slash" onClick={onShowPassword}></i> :<i className="fa-regular fa-eye" onClick={onShowPassword}></i> }
        />
        <ButtonForm text='Login' htmlType='submit' wrapperCol={{ span: 24 }} className='btn_submit_form_login' />
      </Form>

    </div>
  )
}

export default index
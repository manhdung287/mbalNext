import React, { useState } from 'react'
import { Form, notification } from 'antd';
import Input from 'lib/input';
import { APIPost, APIPut } from 'src/services/ProcessAPI';
import { useRouter } from 'next/router';
import ButtonForm from 'lib/button/ButtonForm';
import { UrlLoginPath } from 'config/const';
import Cookies from 'js-cookie';
import LayoutLogin from './components/LayoutLogin';
import NavLink from 'lib/NavLink';
import { ROUTERS } from 'routers/Routers';

function index() {
  const router = useRouter();

  const [showPassword, setShowPassWord] = useState(false);
  const [loading, setLoading] = useState(false);

  const onShowPassword = () => {
    setShowPassWord(!showPassword);
  }
  const onFilishForm = async (values: any) => {
    setLoading(true)
    const request = await APIPost(UrlLoginPath, values)
    if (request?.accessToken) {
      Cookies.set('accessToken', request?.accessToken);
     router.push(ROUTERS.Landing)
    }
    if (request?.code === 401) {
      notification.open({
        message: 'Error',
        description: request?.msg,
      });
    }
    setLoading(false);
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <LayoutLogin>
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
          name='userName'
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
          suffix={showPassword ? <i className="fa-regular fa-eye-slash" onClick={onShowPassword}></i> : <i className="fa-regular fa-eye" onClick={onShowPassword}></i>}
        />
          <p>Do you have a account ?  <NavLink to={ROUTERS.Register} text='Register' className='text_link' /></p>
        <ButtonForm loading={loading} text='Login' htmlType='submit' wrapperCol={{ span: 24 }} className='btn_submit_form_login' />
        <p>Forgot your password ?  <NavLink to={ROUTERS.ForgotPassword} text='Change here' className='text_link' /></p>
      </Form>
    </LayoutLogin>
  )
}

export default index
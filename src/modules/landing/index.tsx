import NavLink from 'lib/NavLink';
import React, { useEffect, useState } from 'react'
import { ROUTERS } from 'routers/Routers';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import ButtonBase from 'lib/button/Button';
import SEOWrapper from 'lib/SEOWrapper';
import { InputNumber, Menu, MenuProps } from 'antd';
import ButtonUpload from 'lib/button/ButtonUpload';
import ButtonSwitch from 'lib/button/Switch';
import CheckBox from 'lib/input/CheckBox';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Modal from 'lib/modal';
import Loading from 'lib/Loading';
import InputNumberComponent from 'lib/input/InputNumber';
import TextArea from 'antd/lib/input/TextArea';
import TextAreaform from 'lib/input/TextAreaform';

const LANDING = () => {
    const [modalVisible, setModal1Visible] = useState(false);
    const onLogout = () => {
        Cookies.remove('accessToken');
        location.reload();
    }
    const items: MenuProps['items'] = [
        {
            label: (
                <NavLink to={ROUTERS.Landing} text='Home' />
            ),
            key: 'Home',
        },
        {
            label: (
                <NavLink text='Detail' to={ROUTERS.DetailLink('abs')} />
            ),
            key: 'Detail',
        },
        {
            label: (
                <NavLink to={ROUTERS.Profile} text='Profile' />
            ),
            key: 'Profile',
        },
        {
            label: (
                <NavLink to={ROUTERS.Login} text='Login' />
            ),
            key: 'Login',
        },
        {
            label: (
                <ButtonBase text='Logout' onClick={onLogout} />
            ),
            key: 'home',
        },
    ]
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const onChangeSw = (e: boolean) => {
        console.log(`checked = ${e}`);
    };
    const onConfirmModal = () => {
        setModal1Visible(!modalVisible);
    }
    const onChangeNumber = (value: number | string) => {
        console.log('changed', value);
      };
    return (
        <>
            <SEOWrapper images={[{ url: '', width: 500, height: 600 }]} />
            <div className='landing'>
                <Menu mode="horizontal" items={items} />
            </div>
            <div className='landing'>
                <ButtonUpload />
                <ButtonSwitch onChange={onChangeSw} label='label Switch' />
                <ButtonSwitch onChange={onChangeSw} defaultChecked={true} />
                <CheckBox label='Chest' onChange={onChange} />
                <ButtonBase onClick={onConfirmModal} text='Open Modal' />
                <Loading />
                <InputNumberComponent onChange={onChangeNumber}  prefix='$'/>
                <TextAreaform/>
            </div>
            <Modal
                visible={modalVisible}
                onOk={onConfirmModal}
                onCancel={onConfirmModal}
                children={<p>Text Modal</p>}
            />
        </>
    );
}
export default LANDING;
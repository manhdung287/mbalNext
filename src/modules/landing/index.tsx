import NavLink from 'lib/NavLink';
import React, { useEffect } from 'react'
import { ROUTERS } from 'routers/Routers';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import ButtonBase from 'lib/button/Button';
import SEOWrapper from 'lib/SEOWrapper';
import { Menu, MenuProps } from 'antd';




const LANDING = () => {
    const router = useRouter();

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
    return (
        <>
            <SEOWrapper images={[{ url: '', width: 500, height: 600 }]} />
            <div className='landing'>
                <Menu mode="horizontal" items={items} />
            </div>
        </>
    );
}
export default LANDING;
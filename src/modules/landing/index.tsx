import NavLink from 'lib/NavLink';
import React, { useEffect } from 'react'
import { ROUTERS } from 'routers/Routers';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import ButtonBase from 'lib/button/Button';

const LANDING = () => {
    const router = useRouter();
    const getCookie = Cookies.get('accessToken')
    useEffect(() => {
        if (!getCookie || getCookie.length === 0) {
            router.push(ROUTERS.Login)
        }
    }, [getCookie])
    const onLogout =()=>{
        Cookies.remove('accessToken');
        location.reload();
    }
    return (
        <div className='home'>
            <div>
                <NavLink text='Detail' to={ROUTERS.DetailLink('abs')} />
            </div>
            <NavLink text='Login' to={ROUTERS.Login} />
            <ButtonBase text='Logout' onClick={onLogout}/>
        </div>

    );
}
export default LANDING;
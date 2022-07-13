import NavLink from 'lib/NavLink';
import React, { useEffect } from 'react'
import { ROUTERS } from 'routers/Routers';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const LANDING = () => {
    const router = useRouter();
    const getCookie = Cookies.get('value')
    useEffect(() => {
        if (!getCookie || getCookie.length === 0) {
            router.push(ROUTERS.Login)
        }
    }, [getCookie])

    return (
        <div className='home'>
            <div>
                <NavLink text='Detail' to={ROUTERS.DetailLink('abs')} />
            </div>
            <NavLink text='Login' to={ROUTERS.Login} />
        </div>

    );
}
export default LANDING;
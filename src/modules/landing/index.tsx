import NavLink from 'lib/NavLink';
import React, { useEffect } from 'react'
import { ROUTERS } from 'routers/Routers';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import ButtonBase from 'lib/button/Button';

const LANDING = () => {
    const router = useRouter();
   
    const onLogout =()=>{
        Cookies.remove('accessToken');
        location.reload();
    }
    return (
        <div className='landing'>
            <div>
                <NavLink text='Detail' to={ROUTERS.DetailLink('abs')} />
            </div>
            <NavLink text='Login' to={ROUTERS.Login} />
            <ButtonBase text='Logout' onClick={onLogout}/>
        </div>

    );
}
export default LANDING;
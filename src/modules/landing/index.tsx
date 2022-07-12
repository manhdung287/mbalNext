import NavLink from 'lib/NavLink';
import React from 'react'
import { ROUTER } from 'routers/Routers';

const LANDING = () => {
    return (
        <div className='home'>
            <div>
                <NavLink text='Detail' to={ROUTER.DetailLink('abs')} />
            </div>
            <NavLink text='Login' to={ROUTER.Login} />
        </div>

    );
}
export default LANDING;
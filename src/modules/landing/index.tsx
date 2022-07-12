import NavLink from 'lib/NavLink';
import React from 'react'
import { ROUTER } from 'routers/Routers';

const LANDING  =()=> {
    return (
         <div className='home'>
            <NavLink text='Landing' to={ROUTER.DetailLink('abs')}>

            </NavLink>
            
         </div>

    );
}
export default LANDING;
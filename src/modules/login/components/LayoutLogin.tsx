import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { ROUTERS } from 'routers/Routers';


function LayoutLogin({ children }: any) {
    const router = useRouter();
    const getToken = Cookies.get('accessToken')
    useEffect(() => {
        if (getToken ) {
            router.push(ROUTERS.Landing)
        }
    }, [getToken])
    return (
        <div className='login_page'>
            {children}
        </div>
    )
}

export default LayoutLogin
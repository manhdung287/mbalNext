import { createAuthHeader } from 'core/createAuthHeader';
import API, { AxiosError } from 'axios';
import { gateHost } from './apiAddress';
import Cookies from 'js-cookie';
import { notification } from 'antd';
import { ROUTERS } from 'routers/Routers';

const getToken = Cookies.get('accessToken')


const handleErrorCode = (status: any) => {
    switch (status) {
        case 400:
            return notification.open({
                message: 'Bad Request',
                description:
                    'API path error, please change API',
                duration: 2
            });
        case 401:
            Cookies.remove('accessToken');
            window.location.href = ROUTERS.Login
            break
        case 403:
            Cookies.remove('accessToken');
            window.location.href = ROUTERS.Login
            return notification.open({
                message: 'Forbidden',
                description:
                    'Unauthorized request,You do not have permission to access this API',
                duration: 2
            });
        case 404:
            return notification.open({
                message: 'Not Found',
                description:
                    'API does not exist',
                duration: 2
            });
        case 405:
            return notification.open({
                message: 'Method Not Allowed',
                description:
                    'API does not exist',
                duration: 2
            });

        default:
            return notification.open({
                message: 'Wrong use of API',
                description:
                    'Check your API usage',
                duration: 2
            });
    }
}


export function APIPost(url: string, postData: any, configs?: any) {
    return API.post(gateHost + url, postData, {
        headers: createAuthHeader(getToken, configs)
    })
        .then((res: { data: { data: any; }; }) => {
            const { data } = res.data;
            return Promise.resolve(data);
        })
        .catch((reason: AxiosError) => {
            handleErrorCode(reason)
        });
}

export function APIGet(url: string, configs?: any) {

    return API.get(gateHost + url, {
        headers: createAuthHeader(getToken, configs)
    })
        .then((res: { data: { data: any; }; }) => {
            const { data } = res.data;
            return Promise.resolve(data);
        })
        .catch((reason: AxiosError) => {
            handleErrorCode(reason.response!.status)
        })
}

export function APIPut(url: string, postData: any, configs?: any) {
    return API.post(gateHost + url, postData, {
        headers: createAuthHeader(getToken, configs)
    })
        .then((res: { data: { data: any; }; }) => {
            const { data } = res.data;
            return Promise.resolve(data);
        })
        .catch((reason: AxiosError) => {
            if (reason.response!.status === 401) {
                Cookies.remove('accessToken');
                location.reload()
            } else {
                console.log('error any thing')
            }
            console.log(reason.message)
        })
}


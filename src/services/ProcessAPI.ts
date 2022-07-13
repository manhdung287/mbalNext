import { createAuthHeader } from 'core/createAuthHeader';
import API from 'axios';
import { gateHost } from './apiAddress';
import Cookies from 'js-cookie';

const getToken = Cookies.get('accessToken')

export function APIPost(url: string, postData: any,  configs?: any) {
    return API.post(gateHost + url, postData, {
        headers: createAuthHeader(getToken, configs)
    })
        .then((res: { data: {  data: any; }; }) => {
            const { data } = res.data;
            return Promise.resolve(data);
        })
        .catch(() => {
            return Promise.resolve(null);
        });
}

export function APIGet(url: string,  configs?: any) {
    return API.get(gateHost + url, {
        headers: createAuthHeader(getToken, configs)
    })
        .then((res: { data: {  data: any; }; }) => {
            const { data } = res.data;
            return Promise.resolve(data);
        })
        .catch(() => {
            return Promise.resolve(null);
        });
}

export function APIPut(url: string, postData: any,  configs?: any) {
    return API.post(gateHost + url, postData, {
        headers: createAuthHeader(getToken, configs)
    })
        .then((res: { data: {  data: any; }; }) => {
            const { data } = res.data;
            return Promise.resolve(data);
        })
        .catch(() => {
            return Promise.resolve(null);
        });       
}


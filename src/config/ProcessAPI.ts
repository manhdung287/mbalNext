import { createAuthHeader } from 'core/createAuthHeader';
import API from 'axios';
import { gateHost } from './apiAddress';

export function APIPost(url: string, postData: any, token?: any, configs?: any) {
    return API.post(gateHost + url, postData, {
        headers: createAuthHeader(token, configs)
    })
        .then((res: { data: { id: any; data: any; }; }) => {
            const { data } = res.data;
            return Promise.resolve(data);
        })
        .catch(() => {
            return Promise.resolve(null);
        });
}

export function APIGet(url: string, token: any, configs?: any) {
    return API.get(gateHost + url, {
        headers: createAuthHeader(token, configs)
    })
        .then((res: { data: { id: any; data: any; }; }) => {
            const { data } = res.data;
            return Promise.resolve(data);
        })
        .catch(() => {
            return Promise.resolve(null);
        });
}

export function APIPut(url: string, postData: any, token: any, configs?: any) {
    return API.post(gateHost + url, postData, {
        headers: createAuthHeader(token, configs)
    })
        .then((res: { data: { id: any; data: any; }; }) => {
            const { data } = res.data;
            return Promise.resolve(data);
        })
        .catch(() => {
            return Promise.resolve(null);
        });
}


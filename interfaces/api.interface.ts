import { AxiosRequestConfig } from 'axios';

export interface RequestApi {
    url: string;
    id?: (number);
    data?: any;
    options?: AxiosRequestConfig;
}

export interface ResponseApi {
    status: number;
    message?: string;
    data?: any
}
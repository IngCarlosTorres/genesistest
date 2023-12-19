import axios from 'axios';
import { SERVER } from '../constants/index'
import { RequestApi, ResponseApi } from '@/interfaces/api.interface'

export class ApiService {
    public async get(request: RequestApi) {
        try {
            const response: ResponseApi = await axios.get(SERVER+request.url,request.options);
            return response
        } catch (error: any) {
            throw error
        }
    }

    public async post(request: RequestApi) {
        try {
            const response: ResponseApi = await axios.post(SERVER+request.url,request.data,request.options)
            return response
        } catch (error: any) {
            throw error
        }
    }
}
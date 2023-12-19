import { ApiService } from '@/services/api.service'
import { RequestApi, ResponseApi } from '@/interfaces/api.interface'
import { Appointment } from '@/interfaces/appointment'

export const saveAppointment = async (appointment: Appointment)  => {
    try {
        const api = new ApiService();
        const request: RequestApi = {
            url: '/api/appointments',
            data: {
                ... appointment
            }
        }
        const response: ResponseApi = await api.post(request);
        return response
    } catch (error) {
        throw error
    }
}
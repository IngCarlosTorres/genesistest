import { ApiService } from '@/services/api.service'
import { RequestApi , ResponseApi } from '@/interfaces/api.interface'
import { Review } from '@/interfaces/review'

export const getReviews = async ()  => {
    try {
        const api = new ApiService();
        const request: RequestApi = {
            url: '/api/reviews'
        }
        const response: ResponseApi = await api.get(request);
        return response
    } catch (error) {
        throw error
    }
}
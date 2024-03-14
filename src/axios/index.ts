import axios from "axios"
import { IFormData } from '../Store/types/index';

const instance = axios.create({
    baseURL: 'http://5.35.84.107:8080/',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const liorAPI = {
    addForm(data: IFormData) {
        return instance.post(`application/`, data)
    },
    getReviews() {
        return instance.get(`reviews_leordev/`)
    },
    getPortfolio() {
        return instance.get(`portfolio_leordev/`)
    }
}
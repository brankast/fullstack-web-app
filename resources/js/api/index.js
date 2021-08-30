import axios from 'axios'
import store from '../js/store'
import router from '../router'

const api = axios.create({
    baseURL: '/api',
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
})

const handleRequestErrors = error => {
    return Promise.reject(error)
}
const handleResponseErrors = (error) => {
    if (error.response && error.response.status)
        switch (error.response.status) {
            case 401:
                if (localStorage.getItem('user-token')) {
                    store.dispatch('auth/logout').then(() => {
                        router.push('/login');
                    });
                }
                break;
            case 403:
                router.push('/');
            case 404:
                router.push('/404');
                break;
            case 422:
                console.log(error)
        }

    return Promise.reject(error);
}

api.interceptors.request.use(
    request => {
        return request
    },
    error => handleRequestErrors(error))

api.interceptors.response.use(
    response => {
        return response
    },
    error => handleResponseErrors(error))

export default api

import axios from 'axios';
// import { rota } from '../env';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

api.interceptors.request.use(config => {
    if (localStorage.getItem('access')) {
        config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access')}`;
    };

    return config;
}, error => {
    return Promise.reject(error);
});


api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const { config, response: { status } } = error;
        const originalRequest = config;

        if (status === 401 && config && !config.__isRetryRequest && localStorage.getItem('refresh')) {
            return apiNotToken.post('token-refresh/', { refresh: localStorage.getItem('refresh') }).then(res => {
                localStorage.setItem('access', res.data.access);
                originalRequest.headers['Authorization'] = `Bearer ${res.data.access}`;
                return Promise.resolve(axios.request(originalRequest));
            }, error => {
                localStorage.clear();
                return Promise.reject(error);
            });
        } else if (status === 401) {
            localStorage.clear();
            window.location.href = window.location.origin + '/signin';
            return Promise.reject(error);
        };

        return Promise.reject(error);
    }
);

export const apiNotToken = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

export default api;

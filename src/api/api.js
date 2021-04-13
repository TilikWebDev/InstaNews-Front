import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080/api/'
})

export const headerAPI = { 
    getMarquee () {
        return instance.get('marque/get').then(response => {
            return response.data;
        });
    },
};

export const newsAPI = {
    getMain () {
        return instance.get('news/main').then(response => {
            return response.data;
        });
    },

    getByCategory (name) {
        return instance.get(`news/category/${name}`).then(response => {
            return response.data;
        });
    },
}
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

    getNewsRead (range, qty, page) {
        return instance.get(`news/category/read?range=${range}&qty=${qty}&page=${page}`).then(response => {
            return response.data;
        });
    },

    getNewsPopular (range, qty, page) {
        return instance.get(`news/category/popular?range=${range}&qty=${qty}&page=${page}`).then(response => {
            return response.data;
        });
    },

    getNewsDiscussed (range, qty, page) {
        return instance.get(`news/category/discussed?range=${range}&qty=${qty}&page=${page}`).then(response => {
            return response.data;
        });
    },

    getByCategory (name, qty, page) {
        return instance.get(`news/category/name/${name}?qty=${qty}&page=${page}`).then(response => {
            return response.data;
        });
    },
}
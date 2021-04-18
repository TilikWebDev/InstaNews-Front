import types from '../assets/types';
import { newsAPI } from '../api/api';
import { NotificationManager } from 'react-notifications';

let initialState = {
    main: {

    }
};

export const setMainNews = (payload) => {
    return {
        type: types.SET_MAIN_NEWS,
        payload
    }
}

export const getMainNews = () => {
    return async (dispatch) => {
        try {
            const {data, status, message} = await newsAPI.getMain();
            if (status) {
                dispatch(setMainNews(data));
            } else {
                NotificationManager.error(message[0]);
            }
        } catch (err) {
            NotificationManager.error(err.message);
        }
    }       
}

export const setByCategoryNews = (payload) => {
    return {
        type: types.SET_BY_CATEGORY_NEWS,
        payload
    }
}


export const getNewsRead = (range = 7, qty = 5, page = 1) => {
    return async (dispatch) => {
        try {
            const {data, status, message} = await newsAPI.getNewsRead(range, qty, page);
            if (status) {
                dispatch(setByCategoryNews({
                    data: [
                        ...data.news
                    ],
                    category: 'read'
                }));
            } else {
                NotificationManager.error(message[0]);
            }
        } catch (err) {
            NotificationManager.error(err.message);
        }
    } 
}

export const getNewsPopular = (range = 7, qty = 5, page = 1) => {
    return async (dispatch) => {
        try {
            const {data, status, message} = await newsAPI.getNewsPopular(range, qty, page);
            if (status) {
                dispatch(setByCategoryNews({
                    data: [
                        ...data.news
                    ],
                    category: 'popular'
                }));
            } else {
                NotificationManager.error(message[0]);
            }
        } catch (err) {
            NotificationManager.error(err.message);
        }
    } 
}

export const getNewsDiscussed = (range = 7, qty = 4, page = 1) => {
    return async (dispatch) => {
        try {
            const {data, status, message} = await newsAPI.getNewsDiscussed(range, qty, page);
            if (status) {
                dispatch(setByCategoryNews({
                    data: [
                        ...data.news
                    ],
                    category: 'discussed'
                }));
            } else {
                NotificationManager.error(message[0]);
            }
        } catch (err) {
            NotificationManager.error(err.message);
        }
    } 
}

export const getByCategory = (name, qty = 7, page = 1) => {
    return async (dispatch) => {
        try {
            const {data, status, message} = await newsAPI.getByCategory(name, qty, page);
            if (status) {
                dispatch(setByCategoryNews({
                    data: [
                        ...data.news
                    ],
                    category: name
                }));
            } else {
                NotificationManager.error(message[0]);
            }
        } catch (err) {
            NotificationManager.error(err.message);
        }
    } 
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MAIN_NEWS:
            return {
                ...state,
                main: {
                    ...action.payload
                }
            }

        case types.SET_BY_CATEGORY_NEWS:
            return {
                ...state,
                [action.payload.category]: [
                    ...action.payload.data
                ]
            }

        default:
            return state;
    }
}

export default headerReducer;
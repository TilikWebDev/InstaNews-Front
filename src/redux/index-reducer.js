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
        const {data, status, message} = await newsAPI.getMain();
        if (status) {
            dispatch(setMainNews(data));
        } else {
            NotificationManager.error(message[0]);
        }
    }       
}

export const setByCategoryNews = (payload) => {
    return {
        type: types.SET_BY_CATEGORY_NEWS,
        payload
    }
}

export const getByCategory = (name, qty = 7) => {
    return async (dispatch) => {
        const {data, status, message} = await newsAPI.getByCategory(name, qty);
        if (status) {
            dispatch(setByCategoryNews({
                data: [
                    ...data
                ],
                category: name
            }));
        } else {
            NotificationManager.error(message[0]);
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
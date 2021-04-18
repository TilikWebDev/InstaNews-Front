import types from '../assets/types';
import { newsAPI } from '../api/api';
import { NotificationManager } from 'react-notifications';

let initialState = {
    is_loading: true,
    range: 1, // for disscussed read popular news range day
    max_qty: 20, // for api request
    all_qty: 0, // all news from request
    page: 0, // current page
    link: null,
    name: null,
    data: [

    ]
};

const setIsLoading = (status) => {
    return {
        type: types.SET_IS_LOADING,
        payload: {
            status
        }
    }
}

const setCategoryNews = ({range, all_qty, page, link, name, data}) => {
    return {
        type: types.SET_CATEGORY_NEWS,
        payload: {
            range,
            all_qty,
            page,
            link,
            name,  
            data
        }
    }
}

export const setIsLoadingStatus = (status) => {
    return async (dispatch) => {
        dispatch(
            setIsLoading(status)
        );
    }
}

export const getNewsRead = ({link, name}, range, max_qty, page) => {
    return async (dispatch) => {
        try {
            const {data, status, message} = await newsAPI.getNewsRead(range, max_qty, page);
            if (status) {
                dispatch(setCategoryNews({
                    range,
                    all_qty: data.all_qty,
                    page, 
                    link, 
                    name, 
                    data: [...data.news]
                }));
            } else {
                NotificationManager.error(message[0]);
            }
        } catch (err) {
            NotificationManager.error(err.message);
        }
    } 
}

export const getNewsPopular = ({link, name}, range, max_qty, page) => {
    return async (dispatch) => {
        try {
            const {data, status, message} = await newsAPI.getNewsPopular(range, max_qty, page);
            if (status) {
                dispatch(setCategoryNews({
                    range,
                    all_qty: data.all_qty,
                    page, 
                    link, 
                    name, 
                    data: [...data.news]
                }));
            } else {
                NotificationManager.error(message[0]);
            }
        } catch (err) {
            NotificationManager.error(err.message);
        }
    } 
}

export const getNewsDiscussed = ({link, name}, range, max_qty, page) => {
    return async (dispatch) => {
        try {
            const {data, status, message} = await newsAPI.getNewsDiscussed(range, max_qty, page);
            if (status) {
                dispatch(setCategoryNews({
                    range,
                    all_qty: data.all_qty,
                    page, 
                    link, 
                    name, 
                    data: [...data.news]
                }));
            } else {
                NotificationManager.error(message[0]);
            }
        } catch (err) {
            NotificationManager.error(err.message);
        }
    } 
}

export const getCategoryNews = ({link, name}, max_qty, page) => {
    return async (dispatch) => {
        try {
            const {data, status, message} = await newsAPI.getByCategory(link, max_qty, page);
            if (status) {
                dispatch(
                    setCategoryNews({
                        range: null,
                        all_qty: data.all_qty,
                        page, 
                        link, 
                        name, 
                        data: [...data.news]
                    })
                );
            } else {
                NotificationManager.error(message[0]);
            }
        } catch (err) {
            NotificationManager.error(err.message);
        }
    } 
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_IS_LOADING:
            return {
                ...state,
                is_loading: action.payload.status
            }
        case types.SET_CATEGORY_NEWS:
            return {
                ...state,
                is_loading: false,
                range: action.payload.range,
                all_qty: action.payload.all_qty,
                page: action.payload.page,
                link: action.payload.link,
                name: action.payload.name,
                data: [
                    ...action.payload.data
                ]
            }

        default:
            return state;
    }
}

export default categoryReducer;
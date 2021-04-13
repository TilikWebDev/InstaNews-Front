import types from '../assets/types';
import { headerAPI } from '../api/api';
import { NotificationManager } from 'react-notifications';

let initialState = {
    marqueeData: []
};

export const setMarquee = (payload) => {
    return {
        type: types.SET_MARQUEE,
        payload
    }
}

export const getMarquee = () => {
    return async (dispatch) => {
        const {data, status, message} = await headerAPI.getMarquee();
        if (status) {
            dispatch(setMarquee(data));
        } else {
            NotificationManager.error(message[0]);
        }
    }       
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MARQUEE:
            return {
                ...state,
                marqueeData: [
                    ...action.payload
                ]
            }

        default:
            return state;
    }
}

export default headerReducer;
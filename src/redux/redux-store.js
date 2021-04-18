import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleWare from 'redux-thunk';

import headerReducer from './header-reducer';
import indexReducer from './index-reducer';
import categoryReducer from './category-reducer';

const reducers = combineReducers({
    headerReducer,
    indexReducer,
    categoryReducer,
});

const store = createStore(reducers,
    compose(
        applyMiddleware(thunkMiddleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    )
);

export default store;
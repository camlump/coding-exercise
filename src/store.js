import {createStore} from 'redux/store';

import appReducer from './reducers/reducer'


export default (initialState) => {
    return createStore(appReducer, initialState);
}
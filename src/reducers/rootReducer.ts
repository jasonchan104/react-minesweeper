import { combineReducers } from 'redux';

import { gridReducer } from './';

export const rootReducer = combineReducers({
    grid: gridReducer
});

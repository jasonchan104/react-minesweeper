import { combineReducers } from 'redux';
import { gameStateReducer, gridReducer } from './';

export const rootReducer = combineReducers({
    gameState: gameStateReducer,
    grid: gridReducer
});

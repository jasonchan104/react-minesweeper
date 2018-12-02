import { CHANGE_DIFFICULTY, GAME_SETUP, FIRST_CLICK } from "../actions";
import { GameState } from "../model";

export function gameStateReducer(state: GameState, action: { type: String, payload: any }): GameState {
    switch (action.type) {
        case GAME_SETUP:
            const difficulty = action.payload;
            return new GameState(difficulty);
        case CHANGE_DIFFICULTY:
            let newGameState = { ...state };
            newGameState.difficulty = action.payload;
            return newGameState;
        case FIRST_CLICK:
            newGameState = { ...state };
            newGameState.firstClick = false;
            return newGameState;
        default:
            return (state) ? state : new GameState();
    }
}

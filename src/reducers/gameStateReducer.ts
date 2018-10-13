import { GAME_SETUP, FIRST_CLICK } from "../actions";
import { GameState } from "../model";

export function gameStateReducer(state: GameState, action: { type: String, payload: any }): GameState {
    switch (action.type) {
        case GAME_SETUP:
            return new GameState();
        case FIRST_CLICK:
            const newGameState = { ...state };
            newGameState.firstClick = false;
            return newGameState;
        default:
            return (state) ? state : new GameState();
    }
}

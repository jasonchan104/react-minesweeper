import * as ActionTypes from './actionTypes';

export namespace Actions {
    export function firstClick(): { type: string, payload: any } {
        return { type: ActionTypes.FIRST_CLICK, payload: null }
    }

    export function gameSetup(): { type: string, payload: any } {
        return { type: ActionTypes.GAME_SETUP, payload: null };
    }

    export function gridSetup(): { type: string, payload: any } {
        return { type: ActionTypes.GRID_SETUP, payload: null };
    }

    export function gridSetupWithSafeSpot(x: number, y: number): { type: string, payload: { x: number, y: number } } {
        return { type: ActionTypes.GRID_SETUP_WITH_SAFE_SPOT, payload: { x, y } };
    }

    export function openAdjacentCells(x: number, y: number): { type: string, payload: { x: number, y: number } } {
        return { type: ActionTypes.OPEN_ADJACENT_CELLS, payload: { x, y } };
    }

    export function openCell(x: number, y: number): { type: string, payload: { x: number, y: number } } {
        return { type: ActionTypes.OPEN_CELL, payload: { x, y } };
    }

    export function flagCell(x: number, y: number): { type: string, payload: { x: number, y: number } } {
        return { type: ActionTypes.FLAG_CELL, payload: { x, y } };
    }
}

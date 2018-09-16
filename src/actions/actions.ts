import * as ActionTypes from './actionTypes';

export namespace Actions {
    export function gridSetup(): { type: string, payload: any } {
        return { type: ActionTypes.GRID_SETUP, payload: null };
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

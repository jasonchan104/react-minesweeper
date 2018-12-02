import { GameDifficulty } from './../model/gameState';
import * as ActionTypes from './actionTypes';

export namespace Actions {
    export function changeDifficulty(difficulty: GameDifficulty): { type: string, payload: GameDifficulty } {
        return { type: ActionTypes.CHANGE_DIFFICULTY, payload: difficulty }
    }

    export function firstClick(): { type: string, payload: any } {
        return { type: ActionTypes.FIRST_CLICK, payload: null }
    }

    export function gameSetup(difficulty: GameDifficulty): { type: string, payload: GameDifficulty } {
        return { type: ActionTypes.GAME_SETUP, payload: difficulty };
    }

    export function gridSetup(gridSize: number[]): { type: string, payload: number[] } {
        return { type: ActionTypes.GRID_SETUP, payload: gridSize };
    }

    export function gridSetupWithSafeSpot(gridSize: number[], x: number, y: number): { type: string, payload: { gridSize: number[], x: number, y: number } } {
        return { type: ActionTypes.GRID_SETUP_WITH_SAFE_SPOT, payload: { gridSize, x, y } };
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

import { FLAG_CELL, GRID_SETUP_WITH_SAFE_SPOT } from './../actions/actionTypes';
import { Grid } from "../model";
import { GRID_SETUP, OPEN_ADJACENT_CELLS, OPEN_CELL } from "../actions";
import { openAdjacentCells, openCell, flagCell } from "../utils";

export function gridReducer(state: Grid, action: { type: String, payload: any }): Grid {
    let newState: Grid;
    let x: number;
    let y: number;
    switch (action.type) {
        case GRID_SETUP:
            let [numRows, numColumns, numMines] = action.payload;
            return new Grid(numRows, numColumns, numMines);
        case GRID_SETUP_WITH_SAFE_SPOT:
            [numRows, numColumns, numMines] = action.payload.gridSize;
            x = action.payload.x;
            y = action.payload.y;
            return new Grid(numRows, numColumns, numMines, x, y);
        case OPEN_ADJACENT_CELLS:
            newState = { ...state };
            x = action.payload.x;
            y = action.payload.y;
            return openAdjacentCells(newState, x, y);
        case OPEN_CELL:
            newState = { ...state };
            x = action.payload.x;
            y = action.payload.y;
            return openCell(newState, x, y);
        case FLAG_CELL:
            newState = { ...state };
            x = action.payload.x;
            y = action.payload.y;
            return flagCell(newState, x, y);
        default:
            return (state) ? state : new Grid(1, 1, 0);
    }
}

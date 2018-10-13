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
            let numRows = 9;
            let numColumns = 9;
            let numMines = 10;
            return new Grid(numRows, numColumns, numMines);
        case GRID_SETUP_WITH_SAFE_SPOT:
            x = action.payload.x;
            y = action.payload.y;
            numRows = 9;
            numColumns = 9;
            numMines = 10;
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

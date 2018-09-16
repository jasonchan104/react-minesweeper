import { Grid } from "../model";
import { GRID_SETUP, OPEN_ADJACENT_CELLS, OPEN_CELL } from "../actions";
import { openAdjacentCells, openCell } from "../utils";

export function gridReducer(state: Grid, action: { type: String, payload: any }): any {
    let newState: Grid;
    let x: number;
    let y: number;
    switch (action.type) {
        case GRID_SETUP:
            const numRows = 5;
            const numColumns = 5;
            const numMines = 5;
            return new Grid(numRows, numColumns, numMines);
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
        default:
            return {};
    }
}

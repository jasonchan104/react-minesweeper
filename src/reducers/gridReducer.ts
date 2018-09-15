import { Grid } from "../model";
import { GRID_SETUP } from "../actions";

export function gridReducer(state: Grid, action: { type: String, payload: any }): any {
    switch (action.type) {
        case GRID_SETUP:
            const numRows = 5;
            const numColumns = 5;
            const numMines = 8;
            return new Grid(numRows, numColumns, numMines);
        default:
            return {};
    }
}

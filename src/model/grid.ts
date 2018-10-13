import { GridValue } from ".";
import { setMine, adjacentToSafeSpot } from "../utils";

export class Grid {

    // columns = max x-value, rows = max y-value
    rows: number;
    columns: number;
    numMines: number;
    cells: GridValue[][];
    openMine: boolean;
    openedCells: number;

    /**
     * @constructor
     * @param rows total number of rows in grid
     * @param columns total number of columns in grid
     * @param numMines total number of mines in grid
     * @param safeX cells adjacent to (safeX, safeY) should not contain a mine
     * @param safeY
    */
    constructor(rows: number, columns: number, numMines: number, safeX = -10, safeY = -10) {
        this.rows = rows;
        this.columns = columns;
        this.numMines = numMines;
        this.openMine = false;
        this.openedCells = 0;

        // initialize grid
        this.cells = new Array(columns);
        for (let i = 0; i < columns; i++) {
            this.cells[i] = new Array(rows);
            for (let j = 0; j < rows; j++) {
                this.cells[i][j] = new GridValue(i, j);
            }
        }

        // Set mines
        for (let i = 0; i < numMines; i++) {
            let x: number;
            let y: number;
            do {
                x = Math.round(Math.random() * (columns - 1));
                y = Math.round(Math.random() * (rows - 1));
            } while (adjacentToSafeSpot(x, y, safeX, safeY) || !setMine(this, x, y));
        }
    }
}

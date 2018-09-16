import { GridValue } from ".";
import { setMine } from "../utils";

export class Grid {

    // columns = max x-value, rows = max y-value
    rows: number;
    columns: number;
    cells: GridValue[][];
    openMine: boolean;

    /**
     * @constructor
     * @param rows total number of rows in grid
     * @param columns total number of columns in grid
     * @param numMines total number of mines in grid
    */
    constructor(rows: number, columns: number, numMines: number) {
        this.rows = rows;
        this.columns = columns;
        this.openMine = false;

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
                x = Math.round(Math.random() * columns);
                y = Math.round(Math.random() * rows);
            } while (!setMine(this, x, y));
            console.log(x.toString() + "," + y.toString())
        }
    }
}

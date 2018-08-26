import { GridValue } from ".";

export class Grid {

    // columns = max x-value, rows = max y-value
    rows: number;
    columns: number;
    grid: GridValue[][];

    /**
     * @constructor
     * @param rows total number of rows in grid
     * @param columns total number of columns in grid
    */
    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;

        this.grid = new Array(columns);
        for (let i = 0; i < columns; i++) {
            this.grid[i] = new Array(rows);
            for (let j = 0; j < rows; j++) {
                this.grid[i][j] = new GridValue(i, j);
            }
        }
    }

    /** Returns the GridValue object at (x, y)
     * @param x x-coordinate
     * @param y y-coordinate  
     * @returns GridValue object
     * @throws when (x, y) is not in the grid
    */
    get(x: number, y: number): GridValue {
        if (this.isInGrid(x, y)) {
            return this.grid[x][y];
        }
        throw new Error(`(${x}, ${y}) is not a valid coordinate in the grid`);
    }

    /** For a mine placed in (x, y), increments the adjacent cell's value
     * @param x x-coordinate
     * @param y y-coordinate  
     * @returns if successfully placed a mine at (x, y)
    */
    setMine(x: number, y: number): boolean {
        if (this.isInGrid(x, y) && !this.grid[x][y].isMine()) {
            this.grid[x][y].setMine();
            this.incrementValuesAroundMine(x, y);
            return true;
        }
        return false;
    }

    /** For a mine placed in (x, y), increments the adjacent cell's value
     * @param x x-coordinate
     * @param y y-coordinate
    */
    incrementValuesAroundMine(mineX: number, mineY: number) {
        for (let i = mineX - 1; i < mineX + 2; i++) {
            for (let j = mineY - 1; j < mineY + 2; j++) {
                if (this.isInGrid(i, j)) {
                    this.grid[i][j].increment();
                }
            }
        }
    }

    /** Checks if coordinate (x, y) is in the grid
     * @param x x-coordinate
     * @param y y-coordinate
     * @returns result
    */
    isInGrid(x: number, y: number): boolean {
        return (x >= 0 && x < this.columns) && (y >= 0 && y < this.rows);
    }
}

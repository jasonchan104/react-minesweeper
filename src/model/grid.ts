import { GridValue } from ".";

export class Grid {

    rows: number;
    columns: number;
    grid: GridValue[][];

    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;

        this.grid = new Array(rows);
        for (let i = 0; i < rows; i++) {
            this.grid[i] = new Array(columns);
            for (let j = 0; j < columns; j++) {
                this.grid[i][j] = new GridValue(i, j);
            }
        }
    }

    get(x: number, y: number): GridValue {
        if (this.isInGrid(x, y)) {
            return this.grid[x][y];
        } else {
            // TODO fix this
            return new GridValue(0, 0);
        }
    }

    // set(x: number, y: number, value: string): boolean {
    //     if (this.isInGrid(x, y)) {
    //         this.grid[x][y]. = value;
    //         return true;
    //     }
    //     return false;
    // }

    setMine(x: number, y: number): boolean {
        if (this.isInGrid(x, y) && !this.grid[x][y].isMine()) {
            this.grid[x][y].setMine();
            this.incrementValuesAroundMine(x, y);
            return true;
        }
        return false;
    }

    incrementValuesAroundMine(mineX: number, mineY: number) {
        for (let i = mineX - 1; i < mineX + 2; i++) {
            for (let j = mineY - 1; j < mineY + 2; j++) {
                if (this.isInGrid(i, j)) {
                    this.grid[i][j].increment();
                }
            }
        }
    }

    isInGrid(x: number, y: number) {
        return (x >= 0 && x < this.rows) && (y >= 0 && y < this.columns);
    }
}

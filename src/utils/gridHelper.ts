import { Grid, GridValue } from "../model";

export function adjacentToSafeSpot(x: number, y: number, safeX: number, safeY: number): boolean {
    for (let i = safeX - 1; i < safeX + 2; i++) {
        for (let j = safeY - 1; j < safeY + 2; j++) {
            if (x == i && y == j) {
                return true;
            }
        }
    }
    return false;
}

export function getCell(grid: Grid, x: number, y: number): GridValue {
    if (isInGrid(grid, x, y)) {
        return grid.cells[x][y];
    }
    throw new Error(`(${x}, ${y}) is not a valid coordinate in the grid`);
}

export function setMine(grid: Grid, x: number, y: number): boolean {
    if (isInGrid(grid, x, y) && !grid.cells[x][y].isMine()) {
        grid.cells[x][y].setMine();
        grid = incrementValuesAroundMine(grid, x, y);
        return true;
    }
    return false;
}

export function incrementValuesAroundMine(grid: Grid, mineX: number, mineY: number): Grid {
    for (let i = mineX - 1; i < mineX + 2; i++) {
        for (let j = mineY - 1; j < mineY + 2; j++) {
            if (isInGrid(grid, i, j)) {
                grid.cells[i][j].increment();
            }
        }
    }
    return grid;
}

export function isInGrid(grid: Grid, x: number, y: number): boolean {
    return (x >= 0 && x < grid.columns) && (y >= 0 && y < grid.rows);
}

export function openAdjacentCells(grid: Grid, x: number, y: number): Grid {
    for (let i = x - 1; i < x + 2; i++) {
        for (let j = y - 1; j < y + 2; j++) {
            openCell(grid, i, j);
        }
    }
    return grid;
}

export function openCell(grid: Grid, x: number, y: number): Grid {
    if (isInGrid(grid, x, y)) {
        const cell = grid.cells[x][y];
        if (!cell.open) {
            cell.open = true;
            if (cell.isMine()) {
                grid.openMine = true;
            } else if (cell.hasNoAdjacentMine()) {
                grid = openAdjacentCells(grid, x, y);
            }
        }
    }
    return grid;
}

export function flagCell(grid: Grid, x: number, y: number): Grid {
    if (isInGrid(grid, x, y)) {
        const cell = grid.cells[x][y];
        cell.flag = !cell.flag;
    }
    return grid;
}


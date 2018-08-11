import * as React from 'react';

import { GridButton } from './';
import { Grid } from '../model';

interface GridState {
    grid: Grid;
}

export class GridComponent extends React.Component<any, GridState> {

    constructor(props: any) {
        super(props)

        const numRows = 2;
        const numColumns = 5;
        const numMines = 3;
        const grid = new Grid(numRows, numColumns);

        for (let i = 0; i < numMines; i++) {
            let x: number;
            let y: number;
            do {
                x = Math.round(Math.random() * numRows);
                y = Math.round(Math.random() * numColumns);
            } while (!grid.setMine(x, y));
            console.log(x.toString() + "," + y.toString())
        }

        this.state = { grid: grid };
    }

    render() {

        const grid = this.state.grid;
        const gridButtons: JSX.Element[] = [];
        for (let row = grid.rows-1; 0 <= row; row--) {

            const rowButtons: JSX.Element[] = [];
            for (let column = 0; column < grid.columns; column++) {

                rowButtons.push(<GridButton key={`${row}, ${column}`} gridValue={grid.get(row, column)} />);
            }
            gridButtons.push(<div key={row}>{rowButtons}</div>);
        }

        return (
            <div className="grid">
                {gridButtons}
            </div>
        );
    }
}

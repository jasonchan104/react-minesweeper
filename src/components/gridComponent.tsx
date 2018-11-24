import * as React from 'react';
import { connect } from 'react-redux';

import { Grid, Store } from '../model';
import { GridButton } from './';
import { gameWon, getCell } from '../utils';

interface GridComponentStateProps {
    grid: Grid;
}

const GridComponentView = (props: GridComponentStateProps) => {
    const grid = props.grid;
    const gameOver = grid.openMine;
    const win = gameWon(grid);
    const gridButtons: JSX.Element[] = [];
    for (let row = grid.rows - 1; 0 <= row; row--) {
        const rowButtons: JSX.Element[] = [];
        for (let column = 0; column < grid.columns; column++) {
            const cell = getCell(grid, column, row);
            rowButtons.push(<GridButton key={`${row}, ${column}`} gridValue={cell} open={cell.open} flag={cell.flag} disabled={gameOver || win} />);
        }
        gridButtons.push(<div key={row} className="buttons has-addons is-marginless is-centered">{rowButtons}</div>);
    }

    let text: JSX.Element = null;
    if (gameOver) {
        text = <p>Game Over</p>;
    } else if (win) {
        text = <p>Winner!</p>;
    }

    return (
        <div>
            <div className="grid">
                {gridButtons}
            </div>
            {text}
        </div>
    );
}

function mapStateToProps(state: Store): GridComponentStateProps {
    return {
        grid: state.grid
    }
}

export const GridComponent = connect(mapStateToProps)(GridComponentView);

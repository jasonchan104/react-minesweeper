import * as React from 'react';
import { connect } from 'react-redux';

import { Grid, Store } from '../model';
import { GridButton } from './';

interface GridComponentStateProps {
    grid: Grid;
}

export class GridComponentView extends React.Component<GridComponentStateProps, any> {

    render() {
        const grid = this.props.grid;
        const gridButtons: JSX.Element[] = [];
        for (let row = grid.rows - 1; 0 <= row; row--) {
            const rowButtons: JSX.Element[] = [];
            for (let column = 0; column < grid.columns; column++) {
                rowButtons.push(<GridButton key={`${row}, ${column}`} gridValue={grid.get(column, row)} />);
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

function mapStateToProps(state: Store): GridComponentStateProps {
    return {
        grid: state.grid
    }
}

export const GridComponent = connect(mapStateToProps)(GridComponentView);

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { GridComponent } from './';
import { Actions } from '../actions';

interface GridComponentDispatchProps {
    gridSetup: () => any;
}

export class MinesweeperView extends React.Component<GridComponentDispatchProps, any> {

    componentDidMount() {
        this.props.gridSetup();
    }

    render() {
        return (
            <div>
                <GridComponent />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch: Dispatch): GridComponentDispatchProps {
    return {
        gridSetup: () => { dispatch(Actions.gridSetup()) }
    }
}

export const Minesweeper = connect(null, mapDispatchToProps)(MinesweeperView);

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { GridComponent } from './';
import { Actions } from '../actions';

interface GridComponentDispatchProps {
    gameSetup: () => any;
}

export class MinesweeperView extends React.Component<GridComponentDispatchProps, any> {

    componentDidMount() {
        this.props.gameSetup();
    }

    render() {
        return (
            <div>
                <GridComponent />
                <button onClick={this.props.gameSetup}>Restart</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch: Dispatch): GridComponentDispatchProps {
    return {
        gameSetup: () => {
            dispatch(Actions.gameSetup());
            dispatch(Actions.gridSetup())
        }
    }
}

export const Minesweeper = connect(null, mapDispatchToProps)(MinesweeperView);

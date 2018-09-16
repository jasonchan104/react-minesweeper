import './minesweeper.css';

import * as React from 'react';

import { connect } from 'react-redux';
import { GridValue } from '../model';
import { Dispatch } from '../../node_modules/redux';
import { Actions } from '../actions';

export interface GridButtonProps {
    gridValue: GridValue;
    open: boolean;
}

export interface GridButtonDispatchProps {
    openAdjacentCells: (x: number, y: number) => any;
    openCell: (x: number, y: number) => any;
}

class GridButtonComponent extends React.Component<GridButtonProps & GridButtonDispatchProps, any> {

    constructor(props: GridButtonProps & GridButtonDispatchProps) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    private onClickHandler() {
        const gridValue = this.props.gridValue;
        this.props.openCell(gridValue.x, gridValue.y);
    }

    render() {
        if (this.props.open) {
            if (this.props.gridValue.isMine())
                return <div className="grid-value">M</div>;
            else
                return <div className="grid-value">{this.props.gridValue.value}</div>;
        } else {
            return <button className="grid-button" onClick={() => this.onClickHandler()} />;
        }
    }
}

function mapDispatchToProps(dispatch: Dispatch): GridButtonDispatchProps {
    return {
        openAdjacentCells: (x: number, y: number) => dispatch(Actions.openAdjacentCells(x, y)),
        openCell: (x: number, y: number) => dispatch(Actions.openCell(x, y)),
    }
}

export const GridButton = connect(null, mapDispatchToProps)(GridButtonComponent);

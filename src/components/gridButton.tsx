import './minesweeper.css';

import * as React from 'react';

import { connect } from 'react-redux';
import { GridValue } from '../model';
import { Dispatch } from '../../node_modules/redux';
import { Actions } from '../actions';

export interface GridButtonProps {
    gridValue: GridValue;
    open: boolean;
    flag: boolean;
    disabled: boolean;
}

export interface GridButtonDispatchProps {
    openAdjacentCells: (x: number, y: number) => any;
    openCell: (x: number, y: number) => any;
    flagCell: (x: number, y: number) => any;
}

class GridButtonComponent extends React.Component<GridButtonProps & GridButtonDispatchProps, any> {

    constructor(props: GridButtonProps & GridButtonDispatchProps) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onRightClickHandler = this.onRightClickHandler.bind(this);
    }

    private onClickHandler() {
        const gridValue = this.props.gridValue;
        this.props.openCell(gridValue.x, gridValue.y);
    }

    private onRightClickHandler(e: any) {
        e.preventDefault();
        const gridValue = this.props.gridValue;
        this.props.flagCell(gridValue.x, gridValue.y);
    }

    render() {
        const cell = this.props.gridValue;
        if (this.props.open) {
            if (cell.isMine())
                return <div className="grid-value">M</div>;
            else
                return <div className="grid-value">{cell.value}</div>;
        } else {
            if (this.props.flag) {
                return <button style={{ backgroundColor: "red" }} className="grid-button" onContextMenu={this.onRightClickHandler} />;
            } else {
                return <button className="grid-button" disabled={this.props.disabled} onClick={this.onClickHandler} onContextMenu={this.onRightClickHandler} />;
            }
        }
    }
}

function mapDispatchToProps(dispatch: Dispatch): GridButtonDispatchProps {
    return {
        openAdjacentCells: (x: number, y: number) => dispatch(Actions.openAdjacentCells(x, y)),
        openCell: (x: number, y: number) => dispatch(Actions.openCell(x, y)),
        flagCell: (x: number, y: number) => dispatch(Actions.flagCell(x, y)),
    }
}

export const GridButton = connect(null, mapDispatchToProps)(GridButtonComponent);

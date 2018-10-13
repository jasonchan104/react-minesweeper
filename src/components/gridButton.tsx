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

const GridButtonComponent = (props: GridButtonProps & GridButtonDispatchProps) => {
    const cell = props.gridValue;
    if (props.open) {
        if (cell.isMine())
            return <div className="grid-value">M</div>;
        else
            return <div className="grid-value">{cell.value}</div>;
    } else {
        if (props.flag) {
            return <button style={{ backgroundColor: "red" }} className="grid-button"
                onContextMenu={(e: any) => onRightClickHandler(e, props.gridValue, props.flagCell)}
            />;
        } else {
            return <button className="grid-button" disabled={props.disabled}
                onClick={_ => onClickHandler(props.gridValue, props.openCell)}
                onContextMenu={(e: any) => onRightClickHandler(e, props.gridValue, props.flagCell)}
            />;
        }
    }
}

function onClickHandler(gridValue: GridValue, openCell: (x: number, y: number) => any) {
    openCell(gridValue.x, gridValue.y);
}

function onRightClickHandler(e: any, gridValue: GridValue, flagCell: (x: number, y: number) => any) {
    e.preventDefault();
    flagCell(gridValue.x, gridValue.y);
}

function mapDispatchToProps(dispatch: Dispatch): GridButtonDispatchProps {
    return {
        openAdjacentCells: (x: number, y: number) => dispatch(Actions.openAdjacentCells(x, y)),
        openCell: (x: number, y: number) => dispatch(Actions.openCell(x, y)),
        flagCell: (x: number, y: number) => dispatch(Actions.flagCell(x, y)),
    }
}

export const GridButton = connect(null, mapDispatchToProps)(GridButtonComponent);

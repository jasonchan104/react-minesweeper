import './minesweeper.css';

import * as React from 'react';

import { connect } from 'react-redux';
import { GridValue, Store, GameState } from '../model';
import { Dispatch } from '../../node_modules/redux';
import { Actions } from '../actions';

interface GridButtonProps {
    gridValue: GridValue;
    open: boolean;
    flag: boolean;
    disabled: boolean;
}

interface GridButtonStateProps {
    gameState: GameState;
}

interface GridButtonDispatchProps {
    gridSetup: (x: number, y: number) => any;
    firstClick: () => any;
    flagCell: (x: number, y: number) => any;
    openAdjacentCells: (x: number, y: number) => any;
    openCell: (x: number, y: number) => any;
}

const GridButtonComponent = (props: GridButtonProps & GridButtonStateProps & GridButtonDispatchProps) => {
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
                onClick={_ => onClickHandler(props)}
                onContextMenu={(e: any) => onRightClickHandler(e, props.gridValue, props.flagCell)}
            />;
        }
    }
}

function onClickHandler(props: GridButtonProps & GridButtonStateProps & GridButtonDispatchProps) {
    const x = props.gridValue.x;
    const y = props.gridValue.y
    if (props.gameState.firstClick) {
        // create grid, set firstClick to false
        props.gridSetup(x, y);
        props.firstClick();
    }
    props.openCell(x, y);
}

function onRightClickHandler(e: any, gridValue: GridValue, flagCell: (x: number, y: number) => any) {
    e.preventDefault();
    flagCell(gridValue.x, gridValue.y);
}

function mapStateToProps(state: Store): GridButtonStateProps {
    return { gameState: state.gameState };
}

function mapDispatchToProps(dispatch: Dispatch): GridButtonDispatchProps {
    return {
        gridSetup: (x: number, y: number) => dispatch(Actions.gridSetupWithSafeSpot(x, y)),
        firstClick: () => dispatch(Actions.firstClick()),
        flagCell: (x: number, y: number) => dispatch(Actions.flagCell(x, y)),
        openAdjacentCells: (x: number, y: number) => dispatch(Actions.openAdjacentCells(x, y)),
        openCell: (x: number, y: number) => dispatch(Actions.openCell(x, y)),
    }
}

export const GridButton = connect(mapStateToProps, mapDispatchToProps)(GridButtonComponent);

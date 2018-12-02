import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from '../../node_modules/redux';
import { Actions } from '../actions';
import { GameState, GridValue, Store } from '../model';
import { gridSize } from '../utils';

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
    gridSetup: (gridSize: number[], x: number, y: number) => any;
    firstClick: () => any;
    flagCell: (x: number, y: number) => any;
    openAdjacentCells: (x: number, y: number) => any;
    openCell: (x: number, y: number) => any;
}

function GridButtonComponent(props: GridButtonProps & GridButtonStateProps & GridButtonDispatchProps) {
    const cell = props.gridValue;
    if (props.open) {
        let icon: JSX.Element;
        if (cell.isMine()) {
            icon = <span className="icon">
                <i className="fas fa-bomb fa-lg"></i>
            </span>;
        } else {
            const cellText = cell.value == 0 ? "" : cell.value;
            const cellColour = getCellTextColour(cellText)
            icon = <span className={`icon ${cellColour} has-text-weight-bold`}>
                {cellText}
            </span>;
        }
        return <div className="button is-small is-marginless is-static">
            {icon}
        </div>;
    } else {
        if (props.flag) {
            return <button className="button is-small is-marginless" disabled={props.disabled}
                onContextMenu={(e: any) => onRightClickHandler(e, props.gridValue, props.flagCell)}>
                <span className="icon">
                    <i className="fas fa-flag fa-lg has-text-red"></i>
                </span>
            </button>;
        } else {
            return <button className="button is-small is-outlined is-marginless" disabled={props.disabled}
                onClick={_ => onClickHandler(props)}
                onContextMenu={(e: any) => onRightClickHandler(e, props.gridValue, props.flagCell)}>
                <span className="icon" />
            </button>;
        }
    }
}

function onClickHandler(props: GridButtonProps & GridButtonStateProps & GridButtonDispatchProps) {
    const x = props.gridValue.x;
    const y = props.gridValue.y
    if (props.gameState.firstClick) {
        // create grid, set firstClick to false
        props.gridSetup(gridSize(props.gameState.difficulty), x, y);
        props.firstClick();
    }
    props.openCell(x, y);
}

function onRightClickHandler(e: any, gridValue: GridValue, flagCell: (x: number, y: number) => any) {
    e.preventDefault();
    flagCell(gridValue.x, gridValue.y);
}

function getCellTextColour(cellText: number | string): string {
    switch (cellText) {
        case 1: return "has-text-blue"
        case 2: return "has-text-green"
        case 3: return "has-text-red"
        case 4: return "has-text-purple"
        case 5: return "has-text-orange"
        case 6: return "has-text-cyan"
        case 7: return "has-text-yellow"
        case 8: return "has-text-grey"
        default: return "has-text-dark"
    }
}

function mapStateToProps(state: Store): GridButtonStateProps {
    return { gameState: state.gameState };
}

function mapDispatchToProps(dispatch: Dispatch): GridButtonDispatchProps {
    return {
        gridSetup: (gridSize: number[], x: number, y: number) => dispatch(Actions.gridSetupWithSafeSpot(gridSize, x, y)),
        firstClick: () => dispatch(Actions.firstClick()),
        flagCell: (x: number, y: number) => dispatch(Actions.flagCell(x, y)),
        openAdjacentCells: (x: number, y: number) => dispatch(Actions.openAdjacentCells(x, y)),
        openCell: (x: number, y: number) => dispatch(Actions.openCell(x, y)),
    }
}

export const GridButton = connect(mapStateToProps, mapDispatchToProps)(GridButtonComponent);

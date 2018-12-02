import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../actions';
import { GameDifficulty, GameState, Grid, Store } from '../model';
import { gameWon, gridSize, numCells } from '../utils';
import { GridComponent, OptionsMenu } from './';
import './minesweeper.scss';


interface MinesweeperStateProps {
    gameState: GameState;
    grid: Grid;
}

interface MinesweeperDispatchProps {
    gameSetup: (difficulty?: GameDifficulty) => any;
}

export class MinesweeperView extends React.Component<MinesweeperStateProps & MinesweeperDispatchProps, any> {

    componentDidMount() {
        this.props.gameSetup();
    }

    render() {
        const grid = this.props.grid;
        const gameOver = grid.openMine;
        const win = gameWon(grid);
        const totalSafeCells = numCells(grid) - grid.numMines;
        let progessColourClass = "";
        if (gameOver) {
            progessColourClass = "is-danger";
        } else if (win) {
            progessColourClass = "is-success";
        }

        return (
            <div className="container">
                <div className="toolbar">
                    <div>
                        <button className="button is-primary" onClick={() => this.props.gameSetup(this.props.gameState.difficulty)}>New Game</button>
                        <OptionsMenu difficulty={this.props.gameState.difficulty} />
                        <div className="mine-counter">
                            <span className="icon">
                                <i className="fas fa-bomb fa-lg"/>
                            </span>
                            {` ${grid.numMines - grid.numFlags}`}
                        </div>
                    </div>
                    <progress className={`progress is-small progress-layout ${progessColourClass}`} value={grid.openedCells} max={totalSafeCells} />
                </div>
                <GridComponent gameOver={gameOver} win={win} />
            </div>
        );
    }
}

function mapStateToProps(state: Store): MinesweeperStateProps {
    return {
        gameState: state.gameState,
        grid: state.grid
    };
}

function mapDispatchToProps(dispatch: Dispatch): MinesweeperDispatchProps {
    return {
        gameSetup: (difficulty: GameDifficulty = GameDifficulty.Beginner) => {
            dispatch(Actions.gameSetup(difficulty));
            dispatch(Actions.gridSetup(gridSize(difficulty)))
        }
    }
}

export const Minesweeper = connect(mapStateToProps, mapDispatchToProps)(MinesweeperView);

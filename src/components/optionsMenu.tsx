import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../actions';
import { GameDifficulty, toGameDifficulty } from '../model';

interface OptionsMenuProps {
    difficulty: GameDifficulty;
}

interface OptionsMenuDispatchProps {
    changeDifficulty: (difficulty: GameDifficulty) => any;
}

function OptionsMenuComponent(props: OptionsMenuProps & OptionsMenuDispatchProps): JSX.Element {
    const dropdownItems = [];
    for (const difficulty in GameDifficulty) {
        dropdownItems.push(
            <a key={difficulty} className="dropdown-item" onClick={() => props.changeDifficulty(toGameDifficulty(difficulty))}>
                {difficulty}
            </a>
        );
    }

    return (
        <div className="dropdown is-hoverable" >
            <div className="dropdown-trigger">
                <button className="button dropdown-button">
                    <div className="level" style={{ width: "100%" }}>
                        <span className="level-left">
                            {props.difficulty}
                        </span>
                        <span className="level-right is-small">
                            <i className="fas fa-angle-down" />
                        </span>
                    </div>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    {dropdownItems}
                </div>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch: Dispatch): OptionsMenuDispatchProps {
    return {
        changeDifficulty: (difficulty: GameDifficulty) => dispatch(Actions.changeDifficulty(difficulty))
    }
}

export const OptionsMenu = connect(null, mapDispatchToProps)(OptionsMenuComponent);

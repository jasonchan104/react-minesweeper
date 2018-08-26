import './minesweeper.css';

import * as React from 'react';

import { GridValue } from '../model';

interface GridButtonProps {
    gridValue: GridValue;
}

interface GridButtonState {
    clicked: boolean;
}

export class GridButton extends React.Component<GridButtonProps, GridButtonState> {

    constructor(props: GridButtonProps) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);

        this.state = ({ clicked: false });
    }

    private onClickHandler() {
        this.setState({ clicked: true });
    }

    render() {
        if (this.state.clicked) {
            if (this.props.gridValue.isMine())
                return <div className="grid-value">M</div>;
            else
                return <div className="grid-value">{this.props.gridValue.value}</div>;
        } else {
            return <button className="grid-button" onClick={() => this.onClickHandler()} />;
        }
    }
}

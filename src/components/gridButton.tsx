import './minesweeper.css';

import * as React from 'react';

interface GridButtonProps {
    value: number;
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
            return <div className="grid-value">{this.props.value}</div>;
        } else {
            return <button className="grid-button" onClick={() => this.onClickHandler()} />;
        }
    }
}

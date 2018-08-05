import * as React from 'react';

import { GridButton } from './';

export class Grid extends React.Component<any, any> {

    render() {
        const grid: JSX.Element[] = [];
        for (let i = 0; i < 5; i++) {
            grid.push(<GridButton key={i} value={i} />);
        }

        return (
            <div>
                {grid}
            </div>
        );
    }
}

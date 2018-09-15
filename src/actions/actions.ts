import { GRID_SETUP } from './actionTypes';

export namespace Actions {
    export function gridSetup(): {type: string, payload: any} {
        return { type: GRID_SETUP, payload: null };
    }
}


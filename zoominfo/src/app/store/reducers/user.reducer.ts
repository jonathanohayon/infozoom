import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from '../actions/user.actions';

export interface State {
    point: number;
    life: number;
}

export const initialState: State = {
    point: 0,
    life: 3
};

const userReducer = createReducer(
    initialState,
    on(userActions.incrementPoint, state => ({ ...state, point: state.point + 100 })),
    on(userActions.decrementLife, state => ({ ...state, life: state.life - 1 })),
    on(userActions.resetPoint, state => ({ ...state, point: 0 })),
    on(userActions.resetLife, state => ({ ...state, life: 3 })),
);

export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
}

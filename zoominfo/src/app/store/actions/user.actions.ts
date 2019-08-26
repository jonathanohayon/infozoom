import { createAction } from '@ngrx/store';

export const incrementPoint = createAction('[Game Page] incrementPoint');
export const resetPoint = createAction('[Game Page] resetPoint');
export const decrementLife = createAction('[Game Page] decrementLife');
export const resetLife = createAction('[Game Page] resetLife');

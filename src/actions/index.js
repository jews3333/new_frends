import * as types from './ActionTypes';
import { createAction } from 'redux-actions';

export const signin = createAction(types.SIGN_IN);
export const signout = createAction(types.SIGN_OUT);
export const signup = createAction(types.SIGN_UP);
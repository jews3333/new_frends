import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    user: null
}

const sign = handleActions({
    [types.SIGN_IN]: (state, action) => {
        return {
            user: action.payload
        }
    },
    [types.SIGN_OUT]: (state, action) => {
        return {
            user: null
        }
    },
    [types.SIGN_UP]: (state, action) => {
        return {
            user: action.payload
        }
    }
}, initialState);

export default sign;
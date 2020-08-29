import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    notice: null
}

const sign = handleActions({
    [types.NOTICE_INSERT]: (state, action) => {
        return {
            notice: action.payload
        }
    },
    [types.NOTICE_UPDATE]: (state, action) => {
        return {
            notice: action.payload
        }
    },
    [types.NOTICE_DELETE]: (state, action) => {
        return {
            notice: action.payload
        }
    }
}, initialState);

export default notice;
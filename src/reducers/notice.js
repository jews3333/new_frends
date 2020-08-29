import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    list: []
}

const notice = handleActions({
    [types.NOTICE_LIST]: (state, action) => {
        return {
            list: [
                ...state.list,
                action.payload
            ]
        }
    },
    [types.NOTICE_INSERT]: (state, action) => {
        return {
            list: action.payload
        }
    },
    [types.NOTICE_UPDATE]: (state, action) => {
        return {
            list: action.payload
        }
    },
    [types.NOTICE_DELETE]: (state, action) => {
        return {
            list: action.payload
        }
    }
}, initialState);

export default notice;
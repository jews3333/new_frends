import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    list: null,
    view: null
}

const notice = handleActions({
    [types.NOTICE_LIST]: (state, action) => {
        return {
            list: {
                ...state.list,
                [action.payload.id] : action.payload.data()
            }
        }
    },
    [types.NOTICE_VIEW]: (state, action) => {
        return {
            view: {
                [action.payload.id] : action.payload.data()
            }
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
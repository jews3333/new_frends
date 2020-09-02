import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    list: null
}

const chat = handleActions({
    [types.CHAT_LIST]: (state, action) => {
        return {
            list: action.payload
        }
    },
    [types.CHAT_INSERT]: (state, action) => {
        return {
            list: action.payload
        }
    },
    [types.CHAT_UPDATE]: (state, action) => {
        return {
            list: action.payload
        }
    },
    [types.CHAT_DELETE]: (state, action) => {
        return {
            list: action.payload
        }
    }
}, initialState);

export default chat;
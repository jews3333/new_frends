import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    member: null
}

const member = handleActions({
    [types.MEMBER_LIST]: (state, action) => {
        return {
            member: {
                ...state.member,
                [action.payload.id] : action.payload.data()
            }
        }
    }
}, initialState);

export default member;
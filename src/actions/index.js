import * as types from './ActionTypes';
import { createAction } from 'redux-actions';

export const signin = createAction(types.SIGN_IN);
export const signout = createAction(types.SIGN_OUT);
export const signup = createAction(types.SIGN_UP);

export const noticeList = createAction(types.NOTICE_LIST);
export const noticeView = createAction(types.NOTICE_VIEW);

export const noticeInsert = createAction(types.NOTICE_INSERT);
export const noticeUpdate = createAction(types.NOTICE_UPDATE);
export const noticeDelete = createAction(types.NOTICE_DELETE);

export const chatList = createAction(types.CHAT_LIST);

export const chatInsert = createAction(types.CHAT_INSERT);
export const chatUpdate = createAction(types.CHAT_UPDATE);
export const chatDelete = createAction(types.CHAT_DELETE);

export const replyList = createAction(types.REPLY_LIST);
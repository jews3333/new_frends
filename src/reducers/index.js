import sign from './sign';
import notice from './notice';
import chat from './chat';
import member from './member';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    sign,
    notice,
    chat,
    member
});

export default reducer;

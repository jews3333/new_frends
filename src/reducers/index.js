import sign from './sign';
import notice from './notice';
import chat from './chat';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    sign,
    notice,
    chat
});

export default reducer;
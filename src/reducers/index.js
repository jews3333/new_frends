import sign from './sign';
import notice from './notice';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    sign,
    notice
});

export default reducer;
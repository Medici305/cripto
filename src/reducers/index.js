import { combineReducers } from 'redux';
import coinReducer from './coinReducer';

const rootReducer = combineReducers({
    market: coinReducer
})

export default rootReducer;
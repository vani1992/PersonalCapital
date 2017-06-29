import { combineReducers } from 'redux';
import InstitutesReducer from './reducer_institutes';
const rootReducer = combineReducers({
 	institutes: InstitutesReducer
});

export default rootReducer;

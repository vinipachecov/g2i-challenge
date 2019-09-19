import { combineReducers } from 'redux';
import question from './ducks/question';
import quiz from './ducks/quiz';

const rootReducer = combineReducers({
  question,
  quiz,
});

export default rootReducer;

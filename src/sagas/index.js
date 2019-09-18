import { all } from 'redux-saga/effects';
import QuestionSagas from './question';

export default function* watchSagas() {
  yield all([
    QuestionSagas()    
  ])
}
import { all } from 'redux-saga/effects';
import QuestionSagas from './question';
import QuizSagas from './quiz'

export default function* watchSagas() {
  yield all([
    QuestionSagas(),
    QuizSagas()
  ])
}
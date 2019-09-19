import { all, put, takeEvery } from 'redux-saga/effects';
import { resultsKey } from '../helpers/constants';
import * as QuizDuck from '../store/ducks/quiz';

const { quizTypes } = QuizDuck;

function* getScoreListSaga() {
  const scoreList = localStorage.getItem(resultsKey);
  if (scoreList) {
    yield put(QuizDuck.sendScoreList(JSON.parse(scoreList)));
  }
}

export default function* watchScoreSagas() {
  yield all([takeEvery(quizTypes.GET_SCORE_LIST, getScoreListSaga)]);
}

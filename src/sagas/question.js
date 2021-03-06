import { takeEvery, put } from 'redux-saga/effects';
import * as QuestionDuck from '../store/ducks/question';
import QuestionService from '../services/question';

const { questionTypes } = QuestionDuck;

export function* fetchQuestionsSaga() {
  try {
    yield put(QuestionDuck.loadingQuestions(true));
    const {
      data: { results },
    } = yield QuestionService.fetchQuestions();
    yield put(QuestionDuck.receivingQuestions(results));
    yield put(QuestionDuck.loadingQuestions(false));
  } catch (error) {
    yield put(QuestionDuck.loadingQuestions(false));
  }
}

export default function* watchQuestionSagas() {
  yield takeEvery(questionTypes.FETCH_QUESTIONS, fetchQuestionsSaga);
}

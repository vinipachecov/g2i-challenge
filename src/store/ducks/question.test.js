import Reducer, { loadingQuestions, receivingQuestions } from './question';
import { questionMock } from '../../fixtures';

describe('Question duck', () => {
  let question = {
    questionList: [],
    loadingQuestions: false,
    score: 0,
  };
  it('should send loadingQuestions Action', () => {
    question = Reducer(question, loadingQuestions(true));
    expect(question.loadingQuestions).toBe(true);
    question = Reducer(question, loadingQuestions(false));
    expect(question.loadingQuestions).toBe(false);
  });

  it('should send receivingQuestions Action', () => {
    question = Reducer(question, receivingQuestions([questionMock]));
    expect(question.questionList).toEqual([questionMock]);
  });
});

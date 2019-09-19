import Reducer, {
  updateScore,
  resetQuiz,
  sendAnswer,
  sendScoreList,
} from './quiz';
import { questionMock, mockResults } from '../../fixtures';

describe('Quiz duck', () => {
  let quizStore = {
    score: 0,
    quizAttemptAnswers: [],
    scoreList: {},
  };
  it('should send  updateScore Action', () => {
    quizStore = Reducer(quizStore, updateScore(1));
    expect(quizStore.score).toBe(1);
  });

  it('should send resetQuiz Action', () => {
    const newScoreList = {
      'Thu Sep 19 2019 00:05:17 GMT-0300 (Brasilia Standard Time)':
        mockResults[
          'Thu Sep 19 2019 00:05:17 GMT-0300 (Brasilia Standard Time)'
        ],
    };
    quizStore = Reducer(quizStore, resetQuiz(newScoreList));
    expect(quizStore.scoreList).toEqual(newScoreList);
  });

  it('should send SendAnswer Action', () => {
    const newAnswer = mockResults['Thu Sep 19 2019 00:05:17 GMT-0300 (Brasilia Standard Time)']
      .quizAttemptAnswers[0];
    quizStore = Reducer(
      quizStore,
      sendAnswer(newAnswer.question, newAnswer.answer),
    );
    expect(quizStore.quizAttemptAnswers).toEqual([newAnswer]);
  });

  it('should send ScoreList ACtion ', () => {
    quizStore = Reducer(quizStore, sendScoreList(mockResults));
    expect(quizStore.scoreList).toEqual(mockResults);
  });
});

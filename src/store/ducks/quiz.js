export const quizTypes = {
  UPDATE_SCORE: 'UPDATE_SCORE',
  RESET_QUIZ: 'RESET_QUIZ',
  SEND_ANSWER: 'SEND_ANSWER',
  GET_SCORE_LIST: 'GET_SCORE_LIST',
  SEND_SCORE_LIST: 'SEND_SCORE_LIST',
};

const initialState = {
  score: 0,
  quizAttemptAnswers: [],
  scoreList: {},
};

export const updateScore = (payload) => ({
  type: quizTypes.UPDATE_SCORE,
  payload,
});

export const resetQuiz = (newResults) => ({
  type: quizTypes.RESET_QUIZ,
  payload: newResults,
});

export const sendAnswer = (question, answer) => ({
  type: quizTypes.SEND_ANSWER,
  question,
  answer,
});

export const getScoreList = () => ({
  type: quizTypes.GET_SCORE_LIST,
});

export const sendScoreList = (scoreList) => ({
  type: quizTypes.SEND_SCORE_LIST,
  payload: scoreList,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case quizTypes.UPDATE_SCORE:
      return { ...state, score: action.payload };
    case quizTypes.RESET_QUIZ:
      return {
        ...state,
        score: 0,
        scoreList: action.payload,
        quizAttemptAnswers: [],
      };
    case quizTypes.SEND_ANSWER:
      return {
        ...state,
        quizAttemptAnswers: [
          ...state.quizAttemptAnswers,
          { answer: action.answer, question: action.question },
        ],
      };
    case quizTypes.SEND_SCORE_LIST:
      return {
        ...state,
        scoreList: action.payload,
      };
    default:
      return state;
  }
};

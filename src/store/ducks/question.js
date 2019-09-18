export const questionTypes = {
  FETCH_QUESTIONS: 'FETCH_QUESTIONS',
  LOADING_QUESTIONS: "LOADING_QUESTIONS",
  RECEIVING_QUESTIONS: "RECEIVING_QUESTIONS",    
};

const initialState = {
  questionList: [],  
  loadingQuestions: false,
  score: 0
};

export const fetchQuestions = () => ({
  type: questionTypes.FETCH_QUESTIONS,  
});

export const loadingQuestions = (payload) => ({
  type: questionTypes.LOADING_QUESTIONS,
  payload
})

export const receivingQuestions = (questionList) => ({
  type: questionTypes.RECEIVING_QUESTIONS,
  payload: questionList
})



export default (state = initialState, action) => {
  switch (action.type) {
    case questionTypes.LOADING_QUESTIONS:
      return { ...state, loadingQuestions: action.payload };
    case questionTypes.RECEIVING_QUESTIONS:
      return {
        ...state,
        questionList: action.payload
      }
    default:
      return state;
  }
};

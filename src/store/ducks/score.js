export const scoreTypes = {
  UPDATE_SCORE:'UPDATE_SCORE'   
};

const initialState = {  
  score: 0
};

export const updateScore = (payload) => ({
  type: scoreTypes.UPDATE_SCORE,
  payload
})

export default (state = initialState, action) => {
  switch (action.type) {
    case scoreTypes.UPDATE_SCORE:
      return { ...state, score: action.payload }
    default:
      return state;
  }
};

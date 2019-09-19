import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as common from '../../styled/common';
import withQuestion from '../../containers/Question';
import withQuiz from '../../containers/Quiz';
import { paths } from '../../helpers/constants';

export function Quiz(props) {
  const {
    questionList, sendAnswer, score, updateScore, history,
  } = props;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [loading, setloading] = useState(false);

  function finishQuiz() {
    history.push(paths.RESULTS);
  }

  function answerQuestion(answer) {
    setloading(true);
    if (questionIndex < questionList.length) {
      if (answer === questionList[questionIndex].correct_answer) {
        updateScore(score + 1);
      }
      sendAnswer(questionList[questionIndex], answer);
      if (questionIndex >= questionList.length - 1) {
        finishQuiz();
      } else {
        setQuestionIndex(questionIndex + 1);
      }
    }
    setloading(false);
  }

  return (
    <common.Container>
      {questionList.length > 0 ? (
        <>
          <h1>{questionList[questionIndex].category}</h1>
          <common.Box>
            <common.QuestionH2>
              {questionList[questionIndex].question}
            </common.QuestionH2>
          </common.Box>
          <p>
            {questionIndex + 1}
            {' '}
of
            {questionList.length}
          </p>
          <common.Button onClick={() => answerQuestion('True')}>
            True
          </common.Button>
          <common.Button
            disabled={loading}
            onClick={() => answerQuestion('False')}
          >
            False
          </common.Button>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </common.Container>
  );
}

Quiz.propTypes = {
  updateScore: PropTypes.func.isRequired,
  questionList: PropTypes.array.isRequired,
  sendAnswer: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withQuiz(withQuestion(Quiz));

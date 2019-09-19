import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaMinus } from 'react-icons/fa';
import * as common from '../../styled/common';
import withQuestion from '../../containers/Question';
import withQuiz from '../../containers/Quiz';
import { paths, resultsKey } from '../../helpers/constants';

const Results = (props) => {
  const {
    quizAttemptAnswers, score, history, resetQuiz,
  } = props;

  useEffect(() => {
    if (quizAttemptAnswers.length < 1) {
      history.push(paths.HOME);
    }
  }, [quizAttemptAnswers]);

  function onPlayAgain() {
    const results = JSON.parse(localStorage.getItem(resultsKey));
    const newResults = {
      ...results,
      [new Date()]: {
        date: new Date(),
        score,
        quizAttemptAnswers,
        id: results ? Object.keys(results).length : 0,
      },
    };
    localStorage.setItem(resultsKey, JSON.stringify(newResults));
    resetQuiz(newResults);
    history.push(paths.HOME);
  }

  return (
    <common.Container>
      <h1>You scored</h1>
      <h1>
        {score}
/
        {quizAttemptAnswers.length}
      </h1>
      <common.List>
        {quizAttemptAnswers.length ? (
          quizAttemptAnswers.map((attempt, index) => {
            return (
              <common.ListItem key={index}>
                {attempt.answer === attempt.question.correct_answer ? (
                  <>
                    <FaPlus size={36} />
                    {' '}
                    {attempt.question.question}
                  </>
                ) : (
                  <>
                    <FaMinus size={36} />
                    {' '}
                    {attempt.question.question}
                    I.
                  </>
                )}
              </common.ListItem>
            );
          })
        ) : (
          <div>Ooops, something went wrong</div>
        )}
        <common.Button onClick={onPlayAgain}>PLAY AGAIN?</common.Button>
      </common.List>
    </common.Container>
  );
};

Results.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  quizAttemptAnswers: PropTypes.array.isRequired,
  resetQuiz: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default withQuiz(withQuestion(Results));

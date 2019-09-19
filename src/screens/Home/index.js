import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as common from '../../styled/common';
import * as screenStyles from './styles';
import withQuestions from '../../containers/Question';
import { paths } from '../../helpers/constants';
import withQuiz from '../../containers/Quiz';

export function Home(props) {
  const { history, scoreList } = props;
  useEffect(() => {
    props.fetchQuestions();
  }, []);

  function startQuiz() {
    history.push(paths.QUIZ);
  }

  function renderResults() {
    return Object.keys(scoreList).map((attempt) => {
      return (
        <screenStyles.ResultListItem key={scoreList[attempt].id}>
          <div>
            Score:
            {' '}
            {scoreList[attempt].score}
/
            {scoreList[attempt].quizAttemptAnswers.length}
          </div>
          <div>
            Date:
            {' '}
            {new Date(scoreList[attempt].date).toLocaleDateString()}
          </div>
        </screenStyles.ResultListItem>
      );
    });
  }
  return (
    <common.Container>
      <h1>Welcome to the Trivia Challenge!</h1>
      <h2>You will be presented with 10 True or False questions.</h2>
      <h2>Can you score 100%?</h2>
      <common.Button onClick={() => startQuiz()}>BEGIN</common.Button>
      <screenStyles.ResultsTitle>Previous Results</screenStyles.ResultsTitle>
      <screenStyles.ResultsContainer>
        {Object.keys(scoreList).length !== 0 ? renderResults() : null}
      </screenStyles.ResultsContainer>
    </common.Container>
  );
}

Home.propTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  scoreList: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withQuiz(withQuestions(Home));

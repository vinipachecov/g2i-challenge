import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  resetQuiz,
  sendAnswer,
  updateScore,
  getScoreList,
} from '../../store/ducks/quiz';

const withQuiz = (WrappedComponent) => {
  const mapStateToProps = (state) => ({
    ...state.quiz,
  });

  const mapDispatchToProps = (dispatch) => ({
    resetQuiz: (newResults) => dispatch(resetQuiz(newResults)),
    sendAnswer: (question, answer) => dispatch(sendAnswer(question, answer)),
    updateScore: (score) => dispatch(updateScore(score)),
    getScoreList: () => dispatch(getScoreList()),
  });

  const QuizComponent = (props) => {
    const { scoreList } = props;
    if (Object.keys(scoreList).length === 0) {
      props.getScoreList();
    }
    return <WrappedComponent {...props} />;
  };

  QuizComponent.propTypes = {
    scoreList: PropTypes.object.isRequired,
    getScoreList: PropTypes.func.isRequired,
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(QuizComponent);
};

export default withQuiz;

import React from 'react';
import { connect } from 'react-redux';
import { updateScore } from '../../store/ducks/score';

const withScore = (WrappedComponent) => {
  const mapStateToProps = (state) => ({
    score: state.score.score,
  });

  const mapDispatchToProps = (dispatch) => ({
    updateScore: (score) => dispatch(updateScore(score)),
  });

  const ScoreComponent = (props) => (<WrappedComponent {...props} />);
  return connect(mapStateToProps, mapDispatchToProps)(ScoreComponent);
};

export default withScore;

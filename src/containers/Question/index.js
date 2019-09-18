import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../store/ducks/question';

const withQuestions = (WrappedComponent) => {
  const mapStateToProps = (state) => ({
    questionList: state.question.questionList,    
  });

  const mapDispatchToProps = (dispatch) => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
  });

  const QuestionComponent = (props) => (<WrappedComponent {...props} />);
  return connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);
};

export default withQuestions;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestions } from '../../store/ducks/question';

const withQuestions = (WrappedComponent) => {
  const mapStateToProps = (state) => ({
    questionList: state.question.questionList,
  });

  const mapDispatchToProps = (dispatch) => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
  });

  const QuestionComponent = (props) => {
    useEffect(() => {
      const { questionList } = props;
      if (questionList.length === 0) {
        props.fetchQuestions();
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  QuestionComponent.propTypes = {
    fetchQuestions: PropTypes.func.isRequired,
    questionList: PropTypes.array.isRequired,
  };
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(QuestionComponent);
};

export default withQuestions;

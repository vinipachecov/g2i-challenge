import React, { useEffect } from 'react';
import * as common from '../styled/common';
import withQuestions from '../containers/Question';
import { paths } from '../helpers/constants'

function Home(props) {
  useEffect(() => {        
    props.fetchQuestions();
  }, [])

  function startQuiz() {
    const { history } = props;
    history.push(paths.QUIZ);
  }
  
  return (
    <common.Container>
      <h1>Welcome to the Trivia Challenge!</h1>
      <h2>You will be presented with 10 True or False questions.</h2>
      <h2>Can you score 100%?</h2>
      <common.Button
        onClick={() => startQuiz()}
      >BEGIN</common.Button>
    </common.Container>
  );
}

export default withQuestions(Home);

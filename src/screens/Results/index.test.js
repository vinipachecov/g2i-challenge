import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Results } from './index';
import { mockResults } from '../../fixtures';

describe('<Results />', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
    quizAttemptAnswers:
      mockResults['Thu Sep 19 2019 00:05:17 GMT-0300 (Brasilia Standard Time)']
        .quizAttemptAnswers,
    resetQuiz: jest.fn(),
    score:
      mockResults['Thu Sep 19 2019 00:05:17 GMT-0300 (Brasilia Standard Time)']
        .score,
  };

  it('Should render Results', () => {
    const { getByText, getAllByText } = render(<Results {...props} />);
    expect(
      getAllByText(props.score.toString(), {
        exact: false,
      })[0],
    ).toBeInTheDocument();
    for (const attempt of props.quizAttemptAnswers) {
      expect(
        getByText(attempt.question.question, {
          exact: false,
        }),
      ).toBeInTheDocument();
    }
  });

  it('Should go back to the Home Page', () => {
    const { getByRole } = render(<Results {...props} />);
    const button = getByRole('button');
    fireEvent.click(button);
    process.nextTick(() => {
      expect(props.resetQuiz).toHaveBeenCalled();
      expect(props.history.push).toHaveBeenCalled();
    });
  });
});

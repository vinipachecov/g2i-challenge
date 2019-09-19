import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { mockResults } from '../../fixtures';
import { Home } from './index';

describe('<Home />', () => {
  const props = {
    fetchQuestions: jest.fn(),
    history: {
      push: jest.fn(),
    },
    scoreList: {},
  };

  const propsWithResults = {
    ...props,
    scoreList: mockResults,
  };

  it('should render <Home /> ', () => {
    render(<Home {...props} />);
    expect(props.fetchQuestions).toHaveBeenCalled();
  });

  it('should render <Home /> with results', () => {
    const { getByText } = render(<Home {...propsWithResults} />);
    for (const result in propsWithResults.scoreList) {
      if (propsWithResults.scoreList[result]) {
        const data = getByText(
          propsWithResults.scoreList[result].score.toString(),
          {
            exact: false,
          },
        );
        expect(data).toBeInTheDocument();
      }
    }
  });

  it('should call push to move to next page ', () => {
    const { getByRole } = render(<Home {...props} />);
    const button = getByRole('button');
    fireEvent.click(button);
    process.nextTick(() => {
      expect(props.history.push).toHaveBeenCalled();
    });
  });
});

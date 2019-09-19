import React from 'react';
import { render } from '@testing-library/react';
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
  const { debug, getByText } = render(<Home {...props} />);

  it('should render <Home /> ', () => {
    expect(props.fetchQuestions).toHaveBeenCalled();
  });

  it('should render <Home /> with results', () => {
    const { getByText, debug } = render(<Home {...propsWithResults} />);
    for (const result in propsWithResults.scoreList) {
      const data = getByText(
        propsWithResults.scoreList[result].score.toString(),
        {
          exact: false,
        },
      );
      expect(data).toBeInTheDocument();
      expect();
    }
    console.log(debug());
  });
});

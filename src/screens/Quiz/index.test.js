import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Quiz } from './index';
import { questionMock } from '../../fixtures';

describe('<Quiz />', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
    questionList: [questionMock],
    score: 0,
    sendAnswer: jest.fn(),
    updateScore: jest.fn(),
  };

  it('Should render Quiz', () => {
    const { getByText } = render(<Quiz {...props} />);
    expect(getByText(questionMock.question)).toBeInTheDocument();
    expect(getByText(questionMock.category)).toBeInTheDocument();
  });

  it('Should fire sendAnswer after on Button False and not call updateScore ', () => {
    const { getAllByRole } = render(<Quiz {...props} />);
    const buttons = getAllByRole('button');
    fireEvent.click(buttons[1]);
    process.nextTick(() => {
      expect(props.sendAnswer).toHaveBeenCalled();
      expect(props.updateScore).not.toHaveBeenCalled();
    });
  });

  it('Should fire sendAnswer after on Button True ', () => {
    const { getAllByRole } = render(<Quiz {...props} />);
    const buttons = getAllByRole('button');
    fireEvent.click(buttons[0]);
    process.nextTick(() => {
      expect(props.sendAnswer).toHaveBeenCalledTimes(2);
      expect(props.updateScore).toHaveBeenCalled();
    });
  });

  it('Should finish the quiz ', () => {
    const { getAllByRole } = render(<Quiz {...props} />);
    const buttons = getAllByRole('button');
    fireEvent.click(buttons[0]);
    process.nextTick(() => {
      expect(props.history.push).toHaveBeenCalled();
    });
  });
});

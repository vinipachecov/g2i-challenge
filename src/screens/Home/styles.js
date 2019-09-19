import styled from 'styled-components';

export const ResultsContainer = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ResultListItem = styled.li`
  width: 50%;
  padding: 50px;
  border: 1px solid #bed0e8;
  box-shadow: 2px 2px 8px 2px #bed0e8;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
`;

export const ResultsTitle = styled.h2`
  margin-top: 40px;
`;

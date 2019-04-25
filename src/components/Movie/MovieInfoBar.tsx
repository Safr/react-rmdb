import React from 'react';
import styled from 'styled-components';
// HELPERS
import { calcTime, convertMoney } from 'lib/helpers';

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <span>Running time: {calcTime(time)}</span>
    <span>Budget: {convertMoney(budget)}</span>
    <span>Revenue: {convertMoney(revenue)}</span>
  </Wrapper>
);

export default MovieInfoBar;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
`;

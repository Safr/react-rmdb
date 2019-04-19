import * as React from 'react';
import styled from 'styled-components';

interface Props {
  voteAverage: number;
}

const VoteBadge: React.FC<Props> = ({ voteAverage }) => (
  <Wrapper>{voteAverage}</Wrapper>
);

export default VoteBadge;

const Wrapper = styled.span`
  background-color: #f0a70d;
  position: absolute;
  border-radius: 50%;
  font-size: 12px;
  z-index: 1;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  top: 15px;
  right: -15px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.4);
`;

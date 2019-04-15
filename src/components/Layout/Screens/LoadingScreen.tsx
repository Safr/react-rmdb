import * as React from 'react';
import styled from 'styled-components';
import Spinner from 'components/UI/Spinner';

interface Props {
  rest?: Object;
}

// EXPORTED COMPONENT
const LoadingScreen: React.FC<Props> = () => (
  <Content>
    <Spinner />
  </Content>
);

export default LoadingScreen;

const Content = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.white};
  > div {
    height: 100px;
    width: 100px;
    position: absolute;
    z-index: 1001;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

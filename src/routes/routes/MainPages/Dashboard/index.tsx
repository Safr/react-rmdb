import * as React from 'react';
import styled from 'styled-components';

const DashboardPages = () => {
  return <Content>dashboard</Content>;
};

export default React.memo(DashboardPages);

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 980px;
  margin: 0 auto;
  padding: 10px;
  padding-top: 100px;
`;

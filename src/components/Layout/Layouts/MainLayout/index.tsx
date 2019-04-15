import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
// DUCKS
import { effects as ordersEffects } from 'redux/ducks/orders.duck';
// COMPONENTS
import Header from './Header';
import Footer from './Footer';

// const { useEffect } = React;

// TYPES
export interface Props {
  children: JSX.Element;
  fetchOrders: () => void;
  rest?: Object;
}

// EXPORTED COMPONENT
const MainLayout: React.FC<Props & RouteProps> = ({
  children,
  fetchOrders,
  ...rest
}) => {
  // useEffect(() => {
  //   fetchOrders();
  // }, [fetchOrders]);
  return (
    <Content>
      <Header {...rest} />
      <Grid>
        <InnerContent>{React.cloneElement(children, { ...rest })}</InnerContent>
      </Grid>
      <Footer />
    </Content>
  );
};

export default compose(
  connect(
    null,
    { ...ordersEffects },
  ),
)(MainLayout);

const Content = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
`;

const Grid = styled.div`
  position: relative;
  flex: 1;
  /* min-height: calc(100vh - 100px); */
  display: grid;
`;

const InnerContent = styled.div`
  display: grid;
  justify-content: center;
  max-height: 100%;
  overflow-y: initial;
`;

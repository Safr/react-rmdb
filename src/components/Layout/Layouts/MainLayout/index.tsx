import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
// DUCKS
import { effects as moviesEffects } from 'redux/ducks/movies.duck';
// COMPONENTS
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const { useEffect } = React;

// TYPES
export interface Props {
  children: JSX.Element;
  fetchMovies: () => Promise<void>;
  rest?: Object;
}

// EXPORTED COMPONENT
const MainLayout: React.FC<Props & RouteProps> = ({
  children,
  fetchMovies,
  ...rest
}) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  return (
    <Content>
      <Header {...rest} />
      <Grid>
        <Sidebar />
        <InnerContent>{React.cloneElement(children, { ...rest })}</InnerContent>
      </Grid>
      <Footer />
    </Content>
  );
};

export default compose(
  connect(
    null,
    { ...moviesEffects },
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
  background-color: #222b31;
  color: #fff;
`;

const Grid = styled.div`
  position: relative;
  flex: 1;
  display: grid;
  grid-template-columns: fit-content(100%) auto;
`;

const InnerContent = styled.div`
  display: grid;
  justify-content: center;
  max-height: 100%;
  overflow-y: initial;
`;

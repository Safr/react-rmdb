import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
// STYLES
import { media } from 'lib/styles';
// HOCS
import { withAjaxLoadMore, withSidebar } from 'components/HOC';
// DUCKS
import { effects as moviesEffects } from 'redux/ducks/movies.duck';
// COMPONENTS
import Header from './Header';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

const { useEffect } = React;

// TYPES
export interface Props {
  children: JSX.Element;
  sidebarProps: any;
  fetchMovies: (page: number) => Promise<void>;
  rest?: Object;
  page: number;
}

// EXPORTED COMPONENT
const MainLayout: React.FC<Props & RouteProps> = ({
  children,
  sidebarProps,
  fetchMovies,
  page,
  ...rest
}) => {
  useEffect(() => {
    fetchMovies(page);
  }, [fetchMovies, page]);
  return (
    <Content>
      <Header {...sidebarProps} {...rest} />
      <Grid>
        <Sidebar />
        <MobileMenu {...sidebarProps} />
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
  withSidebar,
  withAjaxLoadMore,
)(MainLayout);

const Content = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  display: flex;
  min-height: 100vh;
  /* min-height: calc(100vh - 160px); */
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
  ${media.phone`
    grid-template-columns: 1fr;
  `};
`;

const InnerContent = styled.div`
  display: grid;
  /* justify-content: center; */
  max-height: 100%;
  overflow-y: initial;
`;

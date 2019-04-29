import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import styled from 'styled-components';
// import { Location } from 'history';
// STYLES
import { media } from 'lib/styles';
// HOCS
import { withSidebar } from 'components/HOC';
// COMPONENTS
import Header from './Header';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

// TYPES
export interface Props {
  children: JSX.Element;
  sidebarProps: any;
  rest: any;
  location: Location;
}

// EXPORTED COMPONENT
const MainLayout: React.FC<Props & RouteProps> = ({
  children,
  sidebarProps,
  ...rest
}) => {
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

export default withSidebar(MainLayout);

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
  color: ${({ theme }) => theme.colors.white};
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

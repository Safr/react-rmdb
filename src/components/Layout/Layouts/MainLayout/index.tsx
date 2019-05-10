import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import styled from 'styled-components';
// import { Location } from 'history';
// STYLES
import { media } from 'lib/styles';
// HELPERS
import ScrollToTop from 'lib/components/ScrollToTop';
// HOCS
import { withSidebar } from 'components/HOC';
// COMPONENTS
import Modal from 'components/Layout/Modals';
import Toast from './Toaster';
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
    <ScrollToTop>
      <Content>
        <Header {...sidebarProps} {...rest} />
        <Grid>
          <Sidebar {...sidebarProps} {...rest} />
          <MobileMenu {...sidebarProps} />
          <InnerContent>
            {React.cloneElement(children, { ...rest })}
          </InnerContent>
        </Grid>
        <Footer />
        <Modal />
        <Toast />
      </Content>
    </ScrollToTop>
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
  height: 100%;
  /* height: calc(100vh - 140px);
  ${media.phone`
    height: auto;
  `}; */
`;

const Grid = styled.div`
  position: relative;
  flex: 1;
  display: grid;
  // grid-template-columns: fit-content(100%) auto;
  margin-top: 70px;
  // ${media.phone`
  //   grid-template-columns: 1fr;
  // `};
`;

const InnerContent = styled.div`
  display: grid;
  /* justify-content: center; */
  max-height: 100%;
  margin-left: 200px;
  overflow-y: initial;
  ${media.phone`
    margin-left: 0;
  `};
`;

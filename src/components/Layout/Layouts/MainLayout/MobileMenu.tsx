import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
// STYLES
import { media } from 'lib/styles';
// DUCKS
import {
  actions as filtersActions,
  effects as filtersEffects,
  selectors as filtersSelectors,
} from 'redux/ducks/filters.duck';
// COMPONENTS
import Copyright from 'components/Copyright';
import Filters from 'components/UI/Filters';
import SidebarPortal from 'components/Layout/Sidebars/SidebarPortal';

interface Props {
  filters: IFiltersState;
  resetFilters: () => void;
  updateFilters: (filters: IFiltersState) => void;
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

interface MobileProps {
  readonly isOpen: boolean;
}

const MobileMenu: React.FC<Props> = ({ filters, isSidebarOpen, closeSidebar, resetFilters, updateFilters }) => {
  const currentPath = window.location.pathname;
  return (
    <SidebarPortal>
      <Wrapper isOpen={isSidebarOpen} id="sidebar">
        <MediaHeader>
          <Logo>Safr</Logo>
          <MdClose size="30px" color="#fff" onClick={closeSidebar} />
        </MediaHeader>
        <SidebarMenu>
          <li className="sidebar-menu__item">
            <Link exact to="/">
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Discover</title>
                <path d="M10.576 3.368L15.122.74 14.79 0 9.066 1.897 7.953 4.473H0v1.983h1.148L2.708 18.6h7.875l1.56-12.144h1.147V4.473H10.1" />
              </svg>{' '}
              Discover
            </Link>
          </li>
          <li className="sidebar-menu__item">
            <Link exact to="/popular">
              <svg
                width="13"
                height="18"
                viewBox="0 0 13 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Popular</title>
                <path d="M12.464 10.663c-.19-2.486-1.348-4.043-2.37-5.418-.944-1.272-1.76-2.37-1.76-3.992 0-.13-.074-.25-.19-.31-.115-.06-.255-.05-.36.027C6.25 2.068 4.97 3.917 4.524 5.68c-.31 1.23-.35 2.61-.357 3.523C2.75 8.9 2.43 6.783 2.427 6.76c-.016-.11-.083-.206-.18-.26-.1-.05-.215-.054-.315-.004-.074.036-1.823.924-1.925 4.47-.007.12-.007.237-.007.356 0 3.445 2.804 6.25 6.25 6.25H6.268c3.438-.01 6.232-2.81 6.232-6.25 0-.174-.036-.66-.036-.66zM6.25 16.877c-1.15 0-2.083-.996-2.083-2.22 0-.04 0-.083.002-.135.013-.516.11-.868.22-1.102.2.432.56.83 1.145.83.192 0 .347-.155.347-.347 0-.495.01-1.065.134-1.58.11-.456.37-.94.703-1.33.146.504.434.913.714 1.312.402.57.818 1.162.89 2.168.005.06.01.12.01.185 0 1.223-.935 2.22-2.084 2.22z" />
              </svg>{' '}
              Popular
            </Link>
          </li>
          <li className="sidebar-menu__item">
            <Link exact to="/top-rated">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Top Rated</title>
                <path d="M14.05 5.947l-2.897 2.825.684 3.99c.05.287-.07.578-.306.75-.132.097-.29.146-.45.146-.12 0-.243-.03-.356-.088L7.14 11.686 3.56 13.57c-.258.136-.57.113-.807-.057-.235-.172-.353-.462-.304-.75l.685-3.99L.233 5.947c-.21-.203-.284-.508-.195-.785.09-.278.33-.48.62-.522l4.005-.582L6.454.428C6.584.164 6.85 0 7.14 0c.293 0 .558.165.688.427l1.792 3.63 4.007.583c.288.042.528.244.617.52.09.28.015.583-.193.787z" />
              </svg>
              Top Rated
            </Link>
          </li>
          <li className="sidebar-menu__item sidebar-menu__item--coming-soon">
            <Link exact to="/coming-soon">
              Coming Soon
            </Link>
          </li>
        </SidebarMenu>

        {currentPath === '/' && (
          <Filters
          filters={filters} updateFilters={updateFilters}
          resetFilters={resetFilters}
          // filters={this.props.filters}
          // updateFilters={this.props.updateFilters}
          // resetFilters={this.props.resetFilters}
          />
        )}
        <Copyright />
      </Wrapper>
      <ContainerBg isOpen={isSidebarOpen} onClick={closeSidebar} />
      {/* <ContainerBg /> */}
    </SidebarPortal>
  );
};

export default compose(
  connect(
    state => ({
      filters: filtersSelectors.getFilters(state),
    }),
    { ...filtersActions, ...filtersEffects },
  ),
)(MobileMenu);

// const Wrapper = styled.div<MobileProps>`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 5;
//   height: 100%;
//   display: none;
//   width: 170px;
//   transform: ${({ isOpen }) =>
//     !isOpen ? 'translateX(-170px)' : 'translateX(0)'};
//   transition: all 0.5s;
//   height: calc(100vh - 160px);
//   background-color: #191c1f;
//   overflow-y: auto;

//   ${media.phone`
//     display: block;
//   `};

//   li:last-item a {
//     color: rgba(255, 255, 255, 0.5);
//   }
// `;
const Wrapper = styled.div<MobileProps>`
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  height: 100%;
  display: none;
  /* opacity: ${({ isOpen }) => (!isOpen ? '0' : '1')}; */
  transform: ${({ isOpen }) =>
    !isOpen ? 'translateX(-200px)' : 'translateX(0)'};
  transition: all 0.5s;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(0, 0, 0, 0.7);
  overflow-y: auto;
  /* display: grid;
  align-content: start;
  grid-gap: 24px;
  padding: 16px;
  padding-bottom: 40px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white}; */

  ${media.phone`
     display: block;
   `};
`;

const Logo = styled.h1`
  font-size: 36px;
  ${media.phone`
     font-size: 30px;
   `};
`;

const SidebarMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 25px 0;
  font-size: 14px;

  li {
    position: relative;
    a {
      svg {
        display: inline-block;
        margin-right: 15px;
        vertical-align: -2px;

        path {
          transition: all 0.3s ease;
          fill: #fff;
        }
      }
    }
  }
`;

const activeClassName = 'active';

const Link = styled(NavLink).attrs({ activeClassName })`
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  transition: all 0.3s ease;

  :hover {
    color: #ff424f;

    svg path {
      fill: #ff424f;
    }
  }
  &.${activeClassName} {
    color: #ff424f;
    svg path {
      fill: #ff424f;
    }
  }
`;

//   .sidebar-menu__item a.is-active,
//   .sidebar-menu__item:hover a{
//     color: #FF424F;
//   }

//   .sidebar-menu__item a.is-active path,
//   .sidebar-menu__item:hover a path{
//     fill: #FF424F;
//   }

//   .sidebar-menu__item--coming-soon{
//     margin: 10px 0;
//     font-style: italic;
//   }

//   .sidebar-menu__item--coming-soon a{
//     color: rgba(255, 255, 255, 0.5);
//   }

const MediaHeader = styled.div`
  display: none;
  ${media.phone`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 16px;
    align-items: center;
    padding: 15px 5px 15px 15px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  `};
  > span {
    line-height: 1.4;
  }
  > svg {
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }

  > svg:last-child {
    margin-top: 10px;
    justify-self: end;
  }
`;

const ContainerBg = styled.div<MobileProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  background-color: ${({ theme }) => theme.colors.red};
  opacity: 0.6;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

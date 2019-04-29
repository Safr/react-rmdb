import * as React from 'react';
import styled from 'styled-components';
// STYLES
import { media } from 'lib/styles';
// COMPONENTS
import ListItem from './ListItem';

interface Props {
  list: any;
}

const List: React.FC<Props> = ({ list }) => {
  const movieItems = list.map((movie: any) => {
    return <ListItem key={movie.id} {...movie} />;
  });

  return <Wrapper>{movieItems}</Wrapper>;
};

export default List;

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 185px);
  height: auto;
  grid-gap: 40px;
  ${media.laptop`
    grid-template-columns: repeat(4, 185px);
  `};
  ${media.tablet`
    grid-template-columns: repeat(3, 185px);
  `};
  ${media.smallTablet`
     grid-template-columns: repeat(2, 185px);
  `};
  ${media.phone`
    justify-content: center;
  `};
  ${media.smallPhone`
    grid-template-columns: repeat(1, 185px);

  `};
`;

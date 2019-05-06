import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// STYLES
import { media } from 'lib/styles';
// DUCKS
import { selectors as authSelectors } from 'redux/ducks/auth.duck';
import { effects as favoritesEffects, selectors as favoritesSelectors } from 'redux/ducks/favorites.duck';
// COMPONENTS
import ListItem from './ListItem';

interface Props {
  isAuthenticated: boolean;
  favoritedIds: any;
  list: any;
  addToFavoritesList: (selectedMovie: number) => Promise<void>;
  removeFromFavoritesList: (selectedMovie: number) => Promise<void>;
}

const List: React.FC<Props> = ({
  list,
  favoritedIds,
  isAuthenticated,
  addToFavoritesList,
  removeFromFavoritesList,
}) => {
  // const addToUserList = (selectedMovie, userList) => {
  //   const userUid = user.uid;

  //   firebaseApp
  //     .database()
  //     .ref(userUid)
  //     .child(userList)
  //     .update({
  //       [selectedMovie]: selectedMovie,
  //     });
  // };
  // const removeFromUserList = selectedMovie => {
  //   const userUid = user.uid;

  //   firebaseApp
  //     .database()
  //     .ref(userUid)
  //     .child('favorites')
  //     .child(selectedMovie)
  //     .remove();
  // };
  const movieItems = list.map((movie: any) => {
    return (
      <ListItem
        key={movie.id}
        {...movie}
        isAuthenticated={isAuthenticated}
        favoritedIds={favoritedIds}
        onFavoriteSelect={selectedMovie => addToFavoritesList(selectedMovie)}
        onFavoriteDeselect={selectedMovie =>
          removeFromFavoritesList(selectedMovie)
        }
      />
    );
  });

  return <Wrapper>{movieItems}</Wrapper>;
};

export default connect(
  state => ({
    isAuthenticated: authSelectors.getAuth(state),
    user: authSelectors.getUser(state),
    favoritedIds: favoritesSelectors.getFavoritedIds(state),
  }),
  { ...favoritesEffects },
)(List);

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

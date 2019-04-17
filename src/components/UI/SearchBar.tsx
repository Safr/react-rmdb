import * as React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const { useState } = React;

const SearchBar = ({ searchByKeyword }) => {
  const [searchTerm, setSearch] = useState('');

  const handleSearchSubmit = e => {
    e.preventDefault();
    searchByKeyword(searchTerm);
    setSearch('');
  };
  return (
    <Wrapper onSubmit={handleSearchSubmit}>
      <MdSearch size="25px" />
      <Input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={e => setSearch(e.target.value)}
      />
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.form`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translate(-50%, -50%);
    width: 30px;
    height: auto;

    path {
      fill: #fff;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 10px 10px 100px;
  font-size: 20px;
  background-color: #e53b47;
  border: 0;
  color: white;
  -webkit-appearance: none;

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

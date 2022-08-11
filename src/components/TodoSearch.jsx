import React from 'react';

import { TodoContext } from '../context/TodoContext';

import search from '../assets/search.png';
import '../styles/TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch-container">
      <img src={search} alt="TODO searcher" />
      <input placeholder="Search..." className="TodoSearch" onChange={onSearchValueChange} value={searchValue}></input>
    </div>
  );
}

export { TodoSearch };

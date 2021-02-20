import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, showClear, updateAlert }) =>  {

  const [search, setSearch] = useState('');

  const searchHandler = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (search === '') {
      updateAlert('Please give me some input!', 'light');
    } else {
      searchUsers(search);
      setSearch(''); 
    }
  };

  return (
    <div>
      <form className="form" onSubmit={formHandler}>
        <input type="text" name="text" placeholder="Search for users... " value={ search } onChange={searchHandler} />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form> 
      {showClear ? <button onClick={clearUsers} className="btn btn-light btn-block">Reset</button> : null}
      
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired, 
  clearUsers: PropTypes.func.isRequired, 
  showClear: PropTypes.bool.isRequired
};

export default Search;

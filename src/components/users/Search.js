import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { searchUsersAction } from 'redux/actions/';
import { connect, useSelector, useDispatch } from 'react-redux';

const Search = (props, { clearUsers, showClear, updateAlert }) =>  {

  const dispatch = useDispatch();

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
      dispatch(searchUsersAction(search));      
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
  clearUsers: PropTypes.func.isRequired, 
  showClear: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Search);

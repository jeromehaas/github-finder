import React, { Component, useState } from 'react';
import { searchUsers } from 'redux/actions/';
import { connect, useSelector, useDispatch } from 'react-redux';
import { clearUsers, updateAlert, updateLoader, updateSearch } from 'redux/actions';
import styled from 'styled-components';
import theme from 'components/themes/Light';

const Input = styled.input`
    padding: 4px 8px;
    border-radius: 4px;
    border: none !important;
    font-size: 1em;
    padding: 15px !important;
    font-family: 'Open Sans';
    margin-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    background-color: ${p => p.theme.primary};
    color: ${p => p.theme.tertiary}
`;

const Search = () =>  {
  
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const alert = useSelector((state) => state.alerts);
  const search = useSelector((state) => state.search);

  const searchHandler = (event) => {
    event.preventDefault();    
    dispatch(updateSearch(event.target.value));
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (search.value === '') {
      dispatch(updateAlert('Please give me some input!', 'active'));
      setTimeout(() => {
        dispatch(updateAlert('', 'inactive'));
      }, 3000);
    } else {
      dispatch(updateLoader('active'));
      dispatch(searchUsers(search.value));      
      dispatch(updateSearch(''));
      setTimeout(() => {
        dispatch(updateLoader('inactive'));
      }, 2000);
    }
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <Input type="text" name="text" placeholder="Search for users... " value={ search.value } onChange={searchHandler} />
        <Input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form> 
      {users.users.length ? <button onClick={() => dispatch(clearUsers())} className="btn btn-light btn-block">Reset</button> : null}
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Search);

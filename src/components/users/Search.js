import React, { Component, useState } from 'react';
import { searchUsers } from 'redux/actions/';
import { connect, useSelector, useDispatch } from 'react-redux';
import { clearUsers, updateAlert, updateLoader, updateSearch } from 'redux/actions';
import styled from 'styled-components';
import theme from 'components/themes/Light';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 15px;

  @media(max-width:450px) {
    flex-direction: column; 
    gap: 0px;
  }

`;

const Input = styled.input`
    padding: 4px 8px;
    border-radius: 4px;
    border: none !important;
    font-size: 1em;
    padding: 15px !important;
    font-family: 'Open Sans';
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    background-color: ${p => p.theme.primary};
    color: ${p => p.theme.tertiary};

    @media(max-width:450px) {
    width: 100% !important; 
  
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
    if (search.value !== ''){
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
      <Form onSubmit={formHandler}>
        <Input type="text" name="text" placeholder="Search for users... " value={ search.value } onChange={searchHandler} />
        <Input type="submit" value="Search" style={{width: '200px'}} className="btn btn-dark btn-block" />
      </Form> 
    </div>
  );
};

export default Search;

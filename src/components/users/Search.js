import React, { Component, useState } from 'react';
import { searchUsers } from 'redux/actions/';
import { connect, useSelector, useDispatch } from 'react-redux';
import { clearUsers, updateAlert, updateLoader  } from 'redux/actions';


const Search = () =>  {
  
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const alert = useSelector((state) => state.alerts);
  
  const [search, setSearch] = useState('');

  const searchHandler = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (search === '') {
      dispatch(updateAlert('Please give me some input!', 'active'));
      setTimeout(() => {
        dispatch(updateAlert('', 'inactive'));
      }, 3000);
    } else {
      dispatch(updateLoader('active'));
      dispatch(searchUsers(search));      
      setSearch(''); 
      setTimeout(() => {
        dispatch(updateLoader('inactive'));
      }, 2000);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={formHandler}>
        <input type="text" name="text" placeholder="Search for users... " value={ search } onChange={searchHandler} />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
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

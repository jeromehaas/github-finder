import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { searchUsers } from 'redux/actions/';
import { connect, useSelector, useDispatch } from 'react-redux';
import { clearUsers, updateAlert  } from 'redux/actions';


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
      dispatch(searchUsers(search));      
      setSearch(''); 
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

Search.propTypes = {
  // clearUsers: PropTypes.func.isRequired, 
  showClear: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Search);

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUserRepos } from 'redux/actions/';

const UserItem = ({ user }) => {

  const dispatch = useDispatch();
  const { login, avatar_url, html_url } = user;

  const buttonHandler = (username) => {
    console.log('hello');
    dispatch(getUser(username));
    dispatch(getUserRepos(username));
  };

  return (
    <div className="card text-center">
      <img 
        src={avatar_url} 
        className="round-img" 
        style={{ width: '60px'}} />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} onClick={() => buttonHandler(login)} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired, 
};

export default UserItem;

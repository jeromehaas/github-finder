import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser, getUserRepos, updateLoader } from 'redux/actions/';

const UserItem = ({ user }) => {
  
  const { login, avatar_url } = user;
  
  const dispatch = useDispatch();
  const buttonHandler = (username) => {
    dispatch(getUser(username));
    dispatch(getUserRepos(username));
    dispatch(updateLoader('active'));
    setTimeout(() => {
      dispatch(updateLoader('inactive'));
    }, 2000);
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

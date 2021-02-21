import React from 'react';
import UserItem from 'components/users/UserItem';
import Spinner from 'components/layout/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

const Users = (props, { loading }) =>  {

  const users = useSelector((state) => state.users.users);
  
  if (loading) {
    return <Spinner />;
  } else {

    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem user={user} key={user.login}>{user.login}</UserItem>
        ))}
      </div>
    );
  }
  
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1em',
};

const mapStateToProps = (state) => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Users);

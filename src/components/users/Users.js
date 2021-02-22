import React from 'react';
import UserItem from 'components/users/UserItem';
import Spinner from 'components/layout/Spinner';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

const Users = () =>  {

  const users = useSelector((state) => state.users.users);
  const loaders = useSelector((state) => state.loaders);
  
  if (loaders.status === 'active') {
    return <Spinner />;
  }

  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem user={user} key={user.login}>{user.login}</UserItem>
      ))}
    </div>
  );

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

import React from 'react';
import UserItem from 'components/users/UserItem';
import Spinner from 'components/layout/Spinner';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

const Users = () =>  {

  const users = useSelector((state) => state.users.users);
  const loaders = useSelector((state) => state.loaders);
  
  if (loaders.status === 'active') {
    return <Spinner />;
  }

  return (
    <Container>
      {users.map((user) => (
        <UserItem user={user} key={user.login}>{user.login}</UserItem>
      ))}
    </Container>
  );

};
      
const userStyle = {

};

const mapStateToProps = (state) => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Users);

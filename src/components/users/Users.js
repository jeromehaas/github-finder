import React from 'react';
import UserItem from 'components/users/UserItem';
import Spinner from 'components/layout/Spinner';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearUsers } from 'redux/actions';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

const ResetButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${p => p.theme.primary};
  border: none;
  outline: none;

  img {
    width: 30%;
    height: 30%;
  }
`;

const Users = () =>  {

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);
  const loaders = useSelector((state) => state.loaders);
  const theme = useSelector((state) => state.theme);
  
  if (loaders.status === 'active') {
    return <Spinner />;
  }

  return (
    <Container>
      {users.map((user) => (
        <UserItem user={user} key={user.login}>{user.login}</UserItem>
      ))}
      {users.length 
        ? <ResetButton onClick={() => dispatch(clearUsers())} className="btn btn-light btn-block">
          {theme.style === 'dark' 
            ? <img src="icons/reset_white.svg" alt="reset"/>
            : <img src="icons/reset_grey.svg"  alt="reset"/>
          }
        </ResetButton> 
        : null} 

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

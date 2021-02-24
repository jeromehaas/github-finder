import React from 'react';
import UserItem from 'components/users/UserItem';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearUsers } from 'redux/actions';
import Spinner from 'components/layout/Spinner';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;

  @media(max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
  }
 
  @media(max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ResetButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${p => p.theme.primary};
  border: none;
  outline: none;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

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
  const color = theme.style === 'dark' ? '#181A1D' : '#ffffff';
  
  if (loaders.status === 'active') {

    return (
      <Spinner />
    );
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
      


const mapStateToProps = (state) => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Users);

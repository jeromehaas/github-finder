import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser, getUserRepos, updateLoader } from 'redux/actions/';
import styled from 'styled-components';
import theme from 'components/themes/Light';

const Card = styled.div`
  padding: ${p => p.theme.padding};
  border-radius: ${p => p.theme.borderRadius};
  background-color: ${p => p.theme.primary};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 40px;
  gap: 30px 30px;
  grid-template-areas:
    "image username username"
    "button button button";

  img {
    border-radius: 50%;
    width: 100%;
    grid-area: image;
  }

  h3 {
    align-self: center;
    grid-area: username;
  }
`;

const Button = styled(Link)`
    width: 100%;
    text-align: center;
    display: inline-block;
    background-color: ${p => p.theme.secondary};
    padding: 7.5px 0;
    grid-area: button;
    border-radius: ${p => p.theme.borderRadius};
    align-self: end;
`;

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
    <Card>
      <img src={avatar_url} />
      <h3>{login}</h3>
      <Button to={`/user/${login}`} className={'button'} onClick={() => buttonHandler(login)} >
          More
      </Button>
    
    </Card>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired, 
};

export default UserItem;

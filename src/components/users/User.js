import React, { Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from 'components/layout/Spinner';
import Repos  from 'components/repos/Repos';
import { getUser } from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateLoader } from 'redux/actions';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${p => p.theme.primary};
  border-radius: ${p => p.theme.borderRadius};
  padding: 30px;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 15px 15px;
  grid-template-areas:
    "profile folowers following publicRepos"
    "profile repo repo repo"
    "profile repo repo repo"
    "profile repo repo repo"
    "profile repo repo repo";
`;

const Profile = styled(Card)`
  grid-area: profile;

  img {
    border-radius: 50%;
    width: 100px;
    margin: 0 auto 30px auto;
    display: block;
  }
`;

const Followers = styled(Card)`
  grid-area: followers;
  display: flex;
  gap: 15px;
`;

const Following = styled(Card)`
  grid-area: following;
  display: flex;
  gap: 15px;
`;

const PublicRepos = styled(Card)`
  grid-area: publicRepos;
  display: flex;
  gap: 15px;
`;

const Repo = styled(Card)`
  grid-area: repo;
`;

const User = ( ) => {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const repos = useSelector((state) => state.users.repos);
  const loaders = useSelector((state) => state.loaders);

  if (loaders.status === 'active') {
    return <Spinner />;
  }

  return (
    <Fragment>

      <Layout>
        {user && repos ? (
          <>
            <Profile>
              <img 
                src={user.avatar_url} 
                className="round-img"
                style={{width: '100px'}} 
                alt="Avatar"/>
              <h2>{user.login}</h2>
              <p>Location: {user.location}</p>
              {user.bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{user.bio}</p>
                </Fragment>
              )}
              {user.bio && (
                <Fragment>
                  <h3>Website</h3>
                  <p>{user.blog}</p>
                </Fragment>
              )}
              {user.bio && (
                <Fragment>
                  <h3>Company</h3>
                  <p>{user.company}</p>
                </Fragment>
              )}
              <a href={user.html_url} className='btn btn-dark my-1'>Visit GitHub Profile</a>

            </Profile>
            <Following>
              <div className="badge badge-success">Following: {user.followers}</div>
            </Following>
            <Followers>
              <div className="badge badge-primary">Followers: {user.followers}</div>
            </Followers>
            <PublicRepos>
              <div className="badge badge-light">Public Repos: {user.public_repos}</div>
            </PublicRepos>

            
            <Repo>
              <Repos repos={repos} />
            </Repo>
      
          </>
        ) : ( null
        )}
      </Layout>
      <Link to='/' >Back to Search</Link>
    </Fragment>
  );
  
  
};



export default User;
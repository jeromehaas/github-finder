import React, { Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'components/layout/Spinner';
import Repos  from 'components/repos/Repos';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import OverviewItem from 'components/overview/OverviewItem';

const Card = styled.div`
  border-radius: ${p => p.theme.borderRadius};
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 15px 15px;
  grid-template-areas:
    "profile overview overview overview"
    "profile repo repo repo"
    "profile repo repo repo"
    "profile repo repo repo"
    "profile repo repo repo";
`;

const Profile = styled(Card)`
  grid-area: profile;
  background-color: ${p => p.theme.primary};
  padding: 30px;

  img {
    border-radius: 50%;
    width: 100px;
    margin: 0 auto 30px auto;
    display: block;
  }
`;

const Overview = styled(Card)`
  grid-area: overview;
  display: flex;
  gap: 15px;
  display: flex;

  .item {
    background-color: ${p => p.theme.primary};
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Repo = styled(Card)`
  grid-area: repo;

  .item {
    padding: 30px;
    background-color: ${p => p.theme.primary};
    margin-bottom: 15px;
  }

  .item:last-child {
    margin-bottom: 0px;
  }
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
            <Overview>
              <OverviewItem title={'Followers'} amount={user.followers} />
              <OverviewItem title={'Following'} amount={user.following} />
              <OverviewItem title={'Public Repos'} amount={user.public_repos} />
            </Overview>
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
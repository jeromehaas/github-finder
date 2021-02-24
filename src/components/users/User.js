import React, { Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'components/layout/Spinner';
import Repos  from 'components/repos/Repos';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import OverviewItem from 'components/overview/OverviewItem';
import { clearUsers } from 'redux/actions';

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

    @media(max-width: 700px) {
      grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      "profile profile profile profile"
      "overview overview overview overview"
      "repo repo repo repo"
    }

    .item {
      margin-bottom: 10px;
    margin: 0 auto 10px;
    text-align: center;
    }
`;

const Profile = styled(Card)`
  grid-area: profile;
  background-color: ${p => p.theme.primary};
  padding: 30px;
  min-width: 250px;

  img {
    border-radius: 50%;
    width: 100px;
    margin: 0 auto 30px auto;
    display: block;
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .item {
    margin-bottom: 10px;
  }

  .icon {
    width: 16px;
    display: inline-block;
    margin: 0 10px 0 0;
  }

  .tag {
    display: inline;
    line-height: 16px;
    vertical-align: text-top;    
    text-overflow: ellipsis;
    max-width: 100px;
    width: 40px;
    overflow: hidden;
    white-space: nowrap;
  }



`;

const Overview = styled(Card)`
  grid-area: overview;
  display: flex;
  gap: 15px;
  display: flex;
  flex-direction: row;


  @media(max-width: 550px) {
    flex-direction: column;
    }

  .item {
    background-color: ${p => p.theme.primary};
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: block;
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

const BackButton = styled(Link)`
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
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30%;
    height: 30%;
  }

`;

const User = ( ) => {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const repos = useSelector((state) => state.users.repos);
  const loaders = useSelector((state) => state.loaders);
  const theme = useSelector((state) => state.theme);

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

              {user.login && user.location && (
                <div className="item">
                  <h2>{user.login}</h2>
                  {theme.style === 'dark' 
                    ?  <img className="icon" src="../icons/location_light.svg" alt="back"/> 
                    :  <img className="icon" src="../icons/location_dark.svg" alt="back"/>
                  } 
                  <p className="tag">{user.location}</p>
                  <br />
                </div>
              )}
              {user.blog && (
                <div className="item">
                  {theme.style === 'dark' 
                    ?  <img className="icon" src="../icons/blog_light.svg" alt="back"/> 
                    :  <img className="icon" src="../icons/blog_dark.svg" alt="back"/>
                  } 
                  <a href={user.blog} className="tag">Website</a>
                  <br />
                </div>
              )}
              {user.company && (
                <div className="item">                                
                  {theme.style === 'dark' 
                    ?  <img className="icon" src="../icons/company_light.svg" alt="back"/> 
                    :  <img className="icon" src="../icons/company_dark.svg" alt="back"/>
                  } 
                  <p className="tag">{user.company}</p>
                  <br />
                </div>
              )}
              {user.html_url && (
                <div className="item">
                  {theme.style === 'dark' 
                    ?  <img className="icon" src="../icons/github_light.svg" alt="back"/> 
                    :  <img className="icon" src="../icons/github_dark.svg" alt="back"/>
                  } 
                  <a href={user.html_url} className="tag">GitHub Account</a>
                  <br />
                </div>
              )}

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
  
      <BackButton to='/' className="btn btn-light btn-block">
        {theme.style === 'dark' 
          ? <img src="../icons/back_white.svg" alt="back"/>
          : <img src="../icons/back_grey.svg" alt="back"/>
        } 
      </BackButton> 
        
    </Fragment>
  );
  
  
};



export default User;
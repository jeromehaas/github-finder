import React, { Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from 'components/layout/Spinner';
import Repos  from 'components/repos/Repos';
import { getUser } from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const User = ( ) => {
  
  const user = useSelector((state) => state.users.user);
  const repos = useSelector((state) => state.users.repos);
  
  return (
    <Fragment>
      {user && (
        <>
          {user.login}
          <div className="card grid-2">
            <div>
              <img 
                src={user.avatar_url} 
                className="round-img"
                style={{width: '100px'}} 
                alt="Avatar"/>
              <h2>{user.login}</h2>
              <p>Location: {user.location}</p>
            </div>
            <div>
              {user.bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{user.bio}</p>
                </Fragment>
              )}
              {user.bio && (
                <Fragment>
                  <h3>Company</h3>
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
            </div>
            <div className="card text-center">
              <div className="badge badge-primary">Followers: {user.followers}</div>
              <div className="badge badge-success">Following: {user.followers}</div>
              <div className="badge badge-light">Public Repos: {user.public_repos}</div>
              <div className="badge badge-dark">Public Gists: {user.public_gists}</div>
            </div>
          </div>
          <Repos repos={repos} />
          <Link to='/' >Back to Search</Link>
        </>
      )}
    </Fragment>
  );
  
  
};

// User.propTypes = {
// loading: PropTypes.bool.isRequired,
// getUser: PropTypes.func.isRequired,
// user: PropTypes.object.isRequired,
// getUserRepos: PropTypes.func.isRequired,
// PropTypes.array.isRequired;
// };

export default User;
import React from 'react';
import RepoItem from 'components/repos/RepoItem';
import PropTypes from 'prop-types';


const Repos = ({repos}) => {
  {console.log('repos from here', repos);
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
  }
};

// Repos.propTypes = {
//   userRepos: PropTypes.array.isRequired
// };

export default Repos;
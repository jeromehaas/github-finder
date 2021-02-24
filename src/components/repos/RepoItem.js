import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RepoLink = styled.a`
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
    display: block;
    white-space: nowrap;
`;

const RepoItem = ({ repo }) => {
  return (
    <div className="item">
     
      <RepoLink href={repo.html_url}>{repo.name}</RepoLink>
     
    </div>
  ); 
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
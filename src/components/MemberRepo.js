import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { getUserRepo } from '../actions/memberDetailsaction';

const MemberRepo = ({ url }) => {

  const [ userRepo, setUserRepo ] = useState([]);
  const [ userRepoError, setUserRepoError ] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      if(loading) {
      const response = await getUserRepo(url);
      if(response.ok){
        setUserRepo(response);
      } else {
        setUserRepoError(response)
      }
      setLoading(false);
    }
  } fetchRepos();
  })

  return (
    <>
      <div className="repo-container">
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <>
          <p>Repos</p>
          <ul>
            {userRepo.map(repo => (
              <a href={repo.html_url}>
              <li>
                {repo.name}         
              </li> 
              </a>
            ))}
        </ul>
        </>
        )}
        </div>
    </>
  );
}

MemberRepo.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MemberRepo;

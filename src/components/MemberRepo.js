import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserRepo } from '../actions/memberDetailsaction';
import "../stylesheet/member-details.scss";

const MemberRepo = ({ responseData }) => {

  const [ userRepo, setUserRepo ] = useState([]);
  const [ userRepoError, setUserRepoError ] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      const { repos_url } = responseData;
      if(loading && repos_url) {
      const response = await getUserRepo(repos_url);
      if(response.message){
        setUserRepoError(response.message);
      } else {
        setUserRepo(response);
      }
      setLoading(false);
    }
  } fetchRepos();
  },[])

  return (
    <>
      <div className="repo-container">
        {userRepo.length > 0 &&
          <div className="Repo-container">
          <h3>Repos</h3>
          <ul>
            {userRepo.map((repo, index) => (
              <a className="repo-text" key={`${index}----`} href={repo.html_url}>
              <li>
                {repo.name}         
              </li> 
              </a>
            ))}
        </ul>
        </div>
        }
        </div>
    </>
  );
}

const mapStateToProps = ({ memberDetail }) => ({
  responseData: memberDetail.data
});




MemberRepo.propTypes = {
  url: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(withRouter(MemberRepo));

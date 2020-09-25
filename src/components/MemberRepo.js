import React, { useState, useEffect } from 'react';
import { getUserRepo } from '../actions/memberDetailsaction';
import getRepos, { getRepo } from "../utils/helper";

const MemberRepo = () => {

  const [ userRepo, setUserRepo ] = useState([]);
  const [ userRepoError, setUserRepoError ] = useState({});
  const [loading, setLoading] = useState(true);

  useState(() => {
    const { data } = this.props;
    console.log(data);
    // if(loading) {
    //   const response = await getUserRepo();
    //   console.log(response, '>>>>>>>>>>>');
    //   if(response.ok){
    //     setUserRepo(response);
    //   } else {
    //     setUserRepoError(response)
    //   }
    //   setLoading(false);
    // }
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
            {getRepo.map(repo => (
              <a src={repo.html_url}>
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


const mapStateToProps = ({ data }) => ({
  data,
});

export default connect(mapStateToProps)(withRouter(MemberRepo));

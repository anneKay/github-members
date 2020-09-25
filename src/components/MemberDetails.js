import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/memberDetailsaction';
import MemberRepo from "./MemberRepo";
import Follower from "./Follower";
import PropTypes from 'prop-types';
import "../stylesheet/member-details.scss";


const MemberDetails = ({location, getUser}) => {

  const [ loading, setLoading ] = useState(true);
  const [userDetail, setUserDetail] = useState( {});
  const [userDetailError, setUserDetailError] = useState({})

  useEffect(() => {
    async function fetchMemberDetails() {
      if (loading === true) {
        const response = await getUser(location.pathname);
        if(response.ok){
          setUserDetail(response);
        } else {
          setUserDetailError(response)
        }
        setLoading(false);
      }
    }
    fetchMemberDetails();
  }, [])

  return (
    <>
      {loading ? (
        <div>Loading...</div>
        ) : (
          Object.keys(userDetail).length && (
            <>
            <div className="details-container">
            <img alt="user-avatar" className="avatar" src={userDetail.avatar_url}></img>
            <div className="user-details">
            <p>{`Name: ${userDetail.name}` }</p>
            <div className="user-follow-details">
            <div>Followers: <Follower url={userDetail.followers_url} /></div>
            </div>
            </div>
          </div>
          <MemberRepo url={userDetail.repos_url} />
        </>
      ))}
    </>
  )
}

MemberDetails.propTypes = {
  location: PropTypes.object.isRequired,
  getUser: PropTypes.object.isRequired
};


export default connect(null, { getUser })(withRouter(MemberDetails));

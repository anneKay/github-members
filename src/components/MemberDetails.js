import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/memberDetailsaction';
import MemberRepo from "./MemberRepo";
import Follower from "./Follower";
import { userDetails } from "../utils/helper";
import PropTypes from 'prop-types';
import "../stylesheet/member-details.scss";


const MemberDetails = () => {
  const [ loading, setLoading ] = useState(true);
  const [userDetail, setUserDetail] = useState( {});
  const [userDetailError, setUserDetailError] = useState({})

  useEffect(() => {
   async function fetchMemberDetails() {
    if (loading === true) {
      const response = await getUser();
      console.log(response, '>>>>>>>>>>>');
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
      Object.keys(userDetails).length > 0 (
        <>
      
        <div className="details-container">
          
        <img alt="user-avatar" className="avatar" src={userDetails.avatar_url}></img>
        <div className="user-details">
        <p>{`Name: ${userDetails.name}` }</p>
        <div className="user-follow-details">
        <div>Followers: <Follower url={userDetails.followers_url} /></div>
        <div>Following: <Follower url={userDetails.following_url} /></div>
        </div>
      
        </div>
      </div>
      <MemberRepo />
        </>
    )
  
      )}
  </>

  )
      }

const mapStateToProps = ({ data }) => ({
  data,
});

export default connect(mapStateToProps, { getUser })(withRouter(MemberDetails));

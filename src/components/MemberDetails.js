import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/memberDetailsaction';
import MemberRepo from "./MemberRepo";
import Header from './common/Header';
import "../stylesheet/member-details.scss";


const MemberDetails = ({location, getUser, responseData}) => {

  const [ loading, setLoading ] = useState(true);
  const [userDetail, setUserDetail] = useState( {});
  const [userDetailError, setUserDetailError] = useState({})

  useEffect(() => {
    async function fetchMemberDetails() {
      if (loading === true) {
        const response = await getUser(location.pathname);
        if(response.message){
          setUserDetailError(response.message);
        } else {
          setUserDetail(response);
        }
        setLoading(false);
      }
    }
    fetchMemberDetails();
  }, [])

  return (
    <>
    <Header />
    <div className="user-container">
      {loading && (<div>Loading ...</div>)}
    {userDetailError.length > 0 && (
      <div>{userDetailError}</div>
    )}
    {
          Object.keys(userDetail).length > 0 && (
            <>
            <div className="details-container">
            <img alt="user-avatar" className="avatar" src={userDetail.avatar_url}></img>
            <div className="user-details">
            <p>{`Name: ${userDetail.name}` }</p>
            <div className="user-follow-details">
            <div className="follow">Followers: {userDetail.followers}</div>
            <div className="follow">Following: {userDetail.following}</div>
            </div>
            </div>
            </div>
          <MemberRepo url={userDetail.repos_url} />
        </>
      )}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  responseData: state
});

MemberDetails.propTypes = {
  location: PropTypes.object.isRequired,
  getUser: PropTypes.object.isRequired
};


export default connect(mapStateToProps, { getUser })(withRouter(MemberDetails));

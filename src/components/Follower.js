import React, { useState, useEffect } from 'react';
import { getUserFollow } from '../actions/memberDetailsaction';
import PropTypes from "prop-types";

const MemberRepo = ({ url }) => {

  const [ userFollow, setUserFollow] = useState([]);
  const [ userFollowError, setUserFollowError ] = useState({});


  useEffect(() => {
    async function fetchFollow() {
      const response = await getUserFollow(url);
      if(response.ok){
        setUserFollow(response);
      } else {
        setUserFollowError(response);
      }
    }
    fetchFollow();
  })

  return (
    <>
      <p>{userFollow.length}</p>
    </>
  );
}

Follower.propTypes = {
  url: PropTypes.string,
};

export default MemberRepo;

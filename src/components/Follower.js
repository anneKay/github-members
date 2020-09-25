import React, { useState, useEffect } from 'react';
import { getUserFollow } from '../actions/memberDetailsaction';

const MemberRepo = ({ url }) => {

  const [ userFollow, setUserFollow] = useState([]);


  useState(() => {
    
    console.log(data);
    // if(loading) {
    //   const response = await getUserFollow();
    //   console.log(response, '>>>>>>>>>>>');
    //   if(response.ok){
    //     setUserFollow(response);
    //   } else {
    //     setUserRepoError(response)
    //   }
    //   setLoading(false);
    // }
  })

  return (
    <>
      <p>{userFollow.length()}</p>
    </>
  );
}

export default MemberRepo;


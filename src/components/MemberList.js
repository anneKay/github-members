import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getMemberList} from '../actions/memberListAction';
import sampleData from '../utils/helper';

const MemberList = ({ getMemberList }) => {

  const [ loading, setLoading ] = useState(true);
  const [ memberList, setMemberList ] = useState(sampleData);
  const [showMembersListErrors, setShowMembersListErrors] = useState({})

  // useEffect(() => {
  //  async function fetchMembers() {
  //   if (loading === true) {
  //     const response = await getMemberList();
  //     console.log(response, '>>>>>>>>>>>');
  //     if(response.ok){
  //       setMemberList(response);
  //     } else {
  //       setShowMembersListErrors(response)
  //     }
  //     setLoading(false);
  //   }
  //   }
  //   fetchMembers();
  // }, [])

  return (
    <>
      {/* {loading ? (
        <div>Loading ...</div>
      ) : 
      <ul>
          {memberList.length > 0 && memberList.map(list => (
            <li>{list}</li>
          ))}
      </ul>
      } */}
       <ul>
          {memberList.length > 0 && memberList.map(list => (
            <li>{list.login}</li>
          ))}
      </ul>
    </>
  )
}

const mapStateToProps = ({ data }) => ({
  data,
});

export default connect(mapStateToProps, { getMemberList })(withRouter(MemberList));



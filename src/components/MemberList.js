import React, { useState, useEffect, Suspense } from 'react';
import PropTypes from "prop-types";
import {getMemberList} from '../actions/memberListAction';
import Header from './common/Header';
import "../stylesheet/member-list.scss";

const MemberList = () => {

  const [ loading, setLoading ] = useState(true);
  const [ memberList, setMemberList ] = useState('');
  const [showMembersListErrors, setShowMembersListErrors] = useState('')

  useEffect(() => {
   async function fetchMembers() {
    if (loading === true) {
      const response = await getMemberList();
      if(response){
        setMemberList(response);
      } else {
        setShowMembersListErrors('An error occured');
      }
      setLoading(false);
    }
    }
    fetchMembers();
  }, [memberList])

  return (
    <>
    <Header />
    <Suspense fallback={<h1 className="memberList-container">Loading ...</h1>}>
    {showMembersListErrors.length > 0 ? (
      <div>{showMembersListErrors}</div>
    ) : (
      memberList.length > 0 && (
        <ul className="memberList-container">
        {memberList.length > 0 && memberList.map(list => (
          <a key={`${list.login}----`} href={`/${list.login}`}>
            <li className="members">{list.login}</li>
          </a>
        ))}
    </ul>
      ))
    }
    </Suspense>
    </>
  )
}

MemberList.propTypes = {
  getMemberList: PropTypes.object.isRequired
};

export default MemberList;

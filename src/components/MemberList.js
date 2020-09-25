import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import {getMemberList} from '../actions/memberListAction';
import Header from './common/Header';
import "../stylesheet/member-list.scss";

const MemberList = ({ getMemberList }) => {

  const [ loading, setLoading ] = useState(true);
  const [ memberList, setMemberList ] = useState([]);
  const [showMembersListErrors, setShowMembersListErrors] = useState({})

  useEffect(() => {
   async function fetchMembers() {
    if (loading === true) {
      const response = await getMemberList();
      if(response.ok){
        setMemberList(response);
      } else {
        setShowMembersListErrors(response)
      }
      setLoading(false);
    }
    }
    fetchMembers();
  }, [])

  return (
    <>
    <Header />
      {loading ? (
        <div>Loading ...</div>
      ) : 
      <ul className="memberList-container">
          {memberList.length > 0 && memberList.map(list => (
            <a href={`/${list.login}`}><li className="members">{list.login}</li></a>
            
          ))}
      </ul>
      }
    </>
  )
}

MemberList.propTypes = {
  getMemberList: PropTypes.func.isRequired
};

const mapStateToProps = ({ data }) => ({
  data,
});

export default connect(mapStateToProps, { getMemberList })(withRouter(MemberList));

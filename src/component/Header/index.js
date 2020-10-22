import React from 'react';
import './style.css';

const IssueHeader = props => {
  return (
    <div className="blogs-page-header-wrapper">
      <div className="blogs-page-header-title">
        {
          window.location.hash === '/' || window.location.hash==='#/'? 
            'User  List': 
            window.location.hash.includes('post-list')? 'Blog List':'Blog Details'
        }
      </div>
      <div className="blogs-page-header-sub-title">{window.location.pathname.includes('post-list')? 'Search blog from a public repository of a user': null}</div>
    </div>
  );
}

export default IssueHeader;

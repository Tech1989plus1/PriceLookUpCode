import React from 'react';
import RecentView from './RecentView.jsx';

const Recent = ({ recent, uidcb }) => {
  return(
    <div className="recentContainer">
      <h3>Recently Viewed</h3>
      <div className="recentFlex">
        {recent.map((item, key) => 
          <RecentView item={item} uidcb={uidcb} key={key}/>
        )}
      </div>
    </div>);
};

export default Recent;

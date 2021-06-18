import React from 'react';

function TopContainer() {
    return (
        <div className="top-container">
        <img className="top-cloud" src="images/cloud.png" alt="cloud-img" />
        <h1>My name is Dan</h1>
        <p>Welcome to my site</p>
        <img className="bottom-cloud" src="images/cloud.png" alt="cloud-img" />
        <img className="mountain" src="images/mountain.png" alt="mountain-img" style={{marginBottom: '-3px'}} />
      </div>
    );
}

export default TopContainer;
import React, { Component } from 'react';

class UserToolTip extends Component {

  render() {
    return (
      <div className="user-tooltip">
        <p>
          You need to be signed in to 
          submit new links, personalize 
          your feed and create  a profile.
          Provide an email for password recovery.
        </p>
      </div>
    );
  }
}

UserToolTip.propTypes = {
  
}

export default UserToolTip;
import React from 'react';
import './Profile.css';

const Profile = ({ ...props }) => {
  return (
    <div>
      <h2 className="WPName">Emma Mondy</h2>
      <p className="WPBio">Weather Extraordinaire</p>
    </div>
  );
};

export default Profile;
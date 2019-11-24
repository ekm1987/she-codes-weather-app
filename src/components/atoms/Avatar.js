
import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';
import Avatar from './avatar.jpg';

const WPAvatar = ({avatar, ...props}) => {
  return (
      <div className="image-cropper">
      <img src={Avatar} className="profile-pic" alt="weather person profile"/>
      </div>
  )
}

// Avatar.propTypes = {
//   image: PropTypes.string.isRequired
// };

export default WPAvatar;
import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = ({avatar, ...props}) => {
  return (
      <div className="image-cropper">
      <img src={avatar} className="profile-pic" alt="weather person profile"/>
      </div>
  )
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired
};

export default Avatar;
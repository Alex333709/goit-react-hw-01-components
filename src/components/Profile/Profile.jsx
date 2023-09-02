// import React from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../img/defaultImage.webp';
import {
  ProfileContainer,
  Description,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  Stats,
  StatItem,
  StatLabel,
  StatQuantity,
} from './Profile.styled.js';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <UserAvatar src={avatar || defaultImage} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>
      <Stats>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{stats.followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{stats.views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{stats.likes}</StatQuantity>
        </StatItem>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

Profile.defaultProps = {
  avatar: defaultImage,
};

export default Profile;

import React from 'react';
import FriendListItem from './FriendListItem.jsx';
import { List } from './Friend.styled.js';

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </List>
  );
}

export default FriendList;

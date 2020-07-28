import React, { useState, useContext } from 'react';
import ShowFriend from './ShowFriend';
import { friendContext } from './FriendContext';

const Friend = () => {
    const [friends, setFriends] = useContext(friendContext)

    return (
        <div>
            {
                friends.map(friend => <ShowFriend
                    friend={friend}
                    key={friend.id}
                ></ShowFriend>)
            }
        </div>
    );
};

export default Friend;
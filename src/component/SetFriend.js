import React, { useContext } from 'react';
import { friendContext } from './FriendContext';


const SetFriend = () => {
    const [friends, setFriends] = useContext(friendContext)

    return (
        <div>
            <h1>hello friend</h1>
        </div>
    );
};

export default SetFriend;
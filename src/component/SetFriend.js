import React, { useContext, useState } from 'react';
import { friendContext } from './FriendContext';

const SetFriend = () => {
    const [friends, setFriends] = useContext(friendContext)
    const [name, setName] = useState('')
    const [hobby, setHobby] = useState('')

    const addName = (e) => {

    }

    return (
        <div>
            <form action={}>
                <input type="text" name="name" value="" onChange={} />
                <input type="text" name="hobby" value="" onChange={} />
            </form>
        </div>
    );
};

export default SetFriend;
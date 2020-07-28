import React, { useContext } from 'react';
import { friendContext } from './FriendContext';

const Header = () => {
    const [friends, useFriends] = useContext(friendContext)

    return (
        <div className="App-header ">
            <h3>shourov</h3>
            <h3> total friend :{friends.length}</h3>
        </div>
    );
};

export default Header;
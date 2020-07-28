import React from 'react';

const ShowFriend = (props) => {
    console.log(props.friend);
    const { name, hobby } = props.friend;
    console.log(name);
    return (
        <div>

            <h3>{name}</h3>
            <h5>{hobby}</h5>
        </div>
    );
};

export default ShowFriend;
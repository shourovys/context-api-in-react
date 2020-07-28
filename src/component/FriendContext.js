import React, { createContext, useState } from 'react';

export const friendContext = createContext()


export const FriendContextProvider = (props) => {
    const [friends, setFriends] = useState([

        {
            name: "Neyamot",
            hobby: "investing",
            id: 23352
        },
        {
            name: "sohel",
            hobby: "electronic",
            id: 23452
        },
        {
            name: "Kamrul",
            hobby: "gaming",
            id: 23842
        },
        {
            name: "Anik",
            hobby: "self business",
            id: 29352
        }
    ])
    console.log(friends)
    return (
        <friendContext.Provider value={[friends, setFriends]}>
            {props.children}
        </friendContext.Provider>
    );
};


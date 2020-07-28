import React from 'react';
import './App.css';
import Friend from './component/Friend'
import Header from './component/Header'
import { FriendContextProvider } from './component/FriendContext';
import ShowFriend from './component/ShowFriend';

function App() {
  return (
    <div className="App">
      <FriendContextProvider>
        <Header></Header>
        <Friend></Friend>
        {/* <ShowFriend></ShowFriend> */}
      </FriendContextProvider>
    </div>
  );
}

export default App;

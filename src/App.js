import { useState } from 'react';

import './App.css';
import HomePage from './components/home';
import AddRoom from './components/add_room';
import RoomPage from './components/room';

// save room objects as variable
export var rooms = [];

export default function App() {
  const [page, setpage] = useState("Home");
  // setroom will be used with setpage to enter a specific room , room will be used as index
  const [room, setRoom] = useState(null);
  // dynamic inner html
  function showComponent(){
    switch (page){
      case "Home":
        return <HomePage setpage={setpage} setroom={setRoom}/>;
      case "addRoom":
        return <AddRoom setpage={setpage}/>;
      case "Room":
        return <RoomPage setpage={setpage} room={rooms[room]}/>;
      default:
        throw Error( "No such page found");
    }
  }
  // ternery because i want the button to show up on other pages then home
  return (
  <div className="App">
    <h1>Smart Home</h1>
    {showComponent()}
    {(page === "Home") ? null : <button className='Button' onClick={()=>{setpage("Home")}}>To Home Page</button>}
  </div>);
}
export class Room {
  constructor(type, name, color){
    this.type = type;
    this.name = name;
    this.color = color;
    this.devices = [];
  }
}

export class Device {
  constructor(type){
    this.type = type;
    this.state = false;
  }
}

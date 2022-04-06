import React,{useState} from 'react'
import {Room, rooms} from '../App'

export default function AddRoom(props) {

  let [room_type, set_room_type] = useState("bedroom");
  let [room_name, set_room_name] = useState('');
  let [room_color, set_room_color] = useState("#858585");

    function create_room(event){
      if (room_name){
        rooms.push(new Room(room_type, room_name, room_color));
        props.setpage("Home");
      } else {
        alert("Couldn't create room")
        props.setpage("Home");
      }
    }

    // listStyleType : none - show no dots for list items
    return (
    <div>
      <h2>Add a Room:</h2>
      <form onSubmit={create_room}>
        <ul style={{'listStyleType':'none'}}>
          <li>
            <label htmlFor="room_type">New Room:  </label>
            <select name="room_type" defaultValue={"bedroom"} value={room_type} onChange={(e)=>set_room_type(e.target.value)}>
            <option value="bedroom">Bedroom</option>
            <option value="bathroom">Bathroom</option>
            <option value="kitchen">Kitchen</option>
            </select>
          </li>
          <li>
            <label htmlFor="room_name">Name: </label>
            <input type="text" name="room_name" onChange={(e)=>{set_room_name(e.target.value)}} placeholder='Room name' maxLength={5}/>
          </li>
          <li>
            <label htmlFor="room_color">Color: </label>
            <input type="color" name="room_color" value={room_color} onChange={(e)=>{set_room_color(e.target.value)}}/>
          </li>
          <button className='Button' type="submit">Create</button>
        </ul>
      </form>
    </div>
  )
}
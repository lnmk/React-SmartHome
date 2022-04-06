import React,{useState} from 'react';

import {Device} from '../App';

export default function AddDevice(props) {
  let room = props.room;
  let [device_type, set_device_type] = useState("AC");
  

    function create_device(event){
      // replace button with addDevice and vice versa - hides at props.show(false);
      if (room.devices.length >= 5){
        alert("Max 5 devices per room.");
      } else if (room.devices.filter(device => device.type === "Sound System").length && (device_type === "Sound System")){
        alert("Max one sound system per room.");
      } else if ((room.type !== "bathroom") && (device_type === "Water Heater")){
        alert("Water Heater only allowed in bathrooms.");
      } else {
        room.devices.push(new Device(device_type));
        props.show(false);
        return true;
      }
      props.show(false);
      return false;
    }

    return (
    <div>
      <h2>Add a Device to {room.name}:</h2>
      <form>
        <ul style={{'listStyleType':'none'}}>
          <li>
            <label htmlFor="device_type">New Device:</label>
            <select name="device_type" id="Select" value={device_type} onChange={(e)=>set_device_type(e.target.value)}>
            <option value="AC">AC</option>
            <option value="Lamp">Lamp</option>
            <option value="Sound System">Sound System</option>
            <option value="Water Heater">Water Heater</option>
            </select>
          </li>
          <button className='Button' type="submit" onClick={create_device}>Create</button>
        </ul>
      </form>
    </div>
  )
}
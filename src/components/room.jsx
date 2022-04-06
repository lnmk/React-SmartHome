import React,{useState} from 'react'
import AddDevice from './add_device';

export default function RoomPage(props) {
    const room = useState(props.room)[0];
    const [isAddingDevice, setAddingDevice] = useState(false); 
    // usestate has side effect of updating the page's elements
    const [force_refresh, set_force_refresh] = useState(0);

    function setDeviceState(index, state){
        room.devices[index].state = state;
        set_force_refresh(force_refresh + 1);
    }

    function removeDevice(index){
        room.devices.splice(index,1);
        set_force_refresh(force_refresh + 1);
    }

    return (
    <div>
        <div style={{'display': 'flex', 'justifyContent': 'space-evenly'}}>
            <div style={{'textAlign': 'left'}}>
                <p>Room name: {room.name}</p>
                <p>Room Type: {room.type}</p>
            </div>
            <ul style={{'listStyleType':'none',}}>
                {room.devices.map( (device, index)=>
                <li>
                    <button 
                        className="Button" style={{'border': 'solid 1.5px', 'backgroundColor':(device.state ? "#00ff00":"#ff0000")}} 
                        onClick={()=>setDeviceState(index, !device.state)} key={index}>{device.type}
                    </button>
                    <button className='XBtn' onClick={()=>removeDevice(index)} key={index}>X</button>
                </li>
                )}
            </ul>
        </div>
        {
            // replace button with addDevice and vice versa - shows here
            isAddingDevice ?
                <AddDevice room={room} show={setAddingDevice} setpage={props.setpage}/> : 
                <button className="Button" onClick={()=>setAddingDevice(true)}>Add Device</button>
        }
    </div>
  )
}
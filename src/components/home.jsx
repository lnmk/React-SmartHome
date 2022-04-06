import React, {useState} from 'react'

import { rooms } from '../App';

export default function HomePage(props) {
    const [force_refresh, set_force_refresh] = useState(0);
    function add_room(){
        return props.setpage("addRoom");
    }
    function removeRoom(index){
        rooms.splice(index,1);
        set_force_refresh(force_refresh + 1);
    }

    return (
    <div>

        <h2>Rooms:</h2>
        {rooms.map( (room, index) => 
        // key is used as an index so raect won't complain about element in loop
            <div>
                <button className='Button' style={{'border': 'solid 1.5px', 'backgroundColor':room.color}} onClick={()=>{props.setroom(index); props.setpage("Room")}} key={index}>{room.name}</button>
                <button className='XBtn' onClick={()=>removeRoom(index)} key={index}>X</button>
            </div>
        )}
        <br /><br />
        <button className="addButton"  onClick={add_room}>+</button>
    </div>
  )
}
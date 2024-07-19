import React,{useState} from "react";



function Addscore(props) {

    const[item,setitem]=useState({
        username:"",
        score:"",
    });

    function makeitem(event)
    {
        const {value,name}=event.target;

        setitem(prev=>{
            return {
                ...item,
                [name]:value,
            }
        });

        
    }

    return (
        <form className="form">
            <div className="cross">
                <button onClick={props.onclose}><h2>X</h2></button>
            </div>
            <input type="text" placeholder="Username" name="username" onChange={makeitem} value={item.username} autoComplete="off" required />
            <input type="text" placeholder="MM:SS:MSS" name="score" onChange={makeitem} value={item.score} autoComplete="off" required />
            <button className="player" onClick={()=>{
                props.add(item,event),setitem({username:"",score:""})
            }} >ADD PLAYER</button>
        </form>
    );
}


export default Addscore;
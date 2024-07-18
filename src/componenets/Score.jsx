import React,{useState,useEffect} from "react";
import Card from "./Card";
import Addscore from "./Addscore";

function Score()
{
    const[visible,setvisible]=useState(false);
    const[tasks,settasks]=useState([]);
    const [recenttask, setrecenttask] = useState({ item: null, index: null });
    function toggle()
    {
        console.log("hi");
        setvisible(prev=>{
            return !prev;
            
        });
                
    }
    function parseTimeToSeconds(time) {
        const [hours, minutes, seconds] = time.split(":").map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    }

    function Additem(item, event) {
        event.preventDefault();
       
        settasks(prev => {
            const newTasks = [...prev, item];
            // Sort tasks based on the score
            newTasks.sort((a, b) => parseTimeToSeconds(a.score) - parseTimeToSeconds(b.score));
            const index = newTasks.indexOf(item);
            setrecenttask({ item, index });
            return newTasks;
        });
    }

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);
    
    
    return(
        
        <div className="score">
            {visible?< Addscore onclose={toggle} add={Additem}/>:null}
          <div className="card-desc">
          <div className="serial">
                <img src="/assets/trophy.png" alt="" />
            </div>
            <div className="details">
                <div className="name">
                    <h2>NAME</h2>
                </div>
                <div className="time">
                    <img src="/assets/timer.png" alt="" />
                    <h2>TIME</h2>
                </div>
            </div>
          </div>
          {tasks.slice(0, 10).map((task, index) => (
                <Card key={index} id={index} username={task.username} score={task.score} />
            ))}
            {tasks.length > 0 && (
                
              <>
                <div className="recent">
                <h2>RECENT ENTRY</h2>
                </div>
                  <Card key={recenttask.index} id={recenttask.index} username={recenttask.item.username} score={recenttask.item.score} />
              </>
            )}

         <div className="add">
         <button onClick={toggle}><h2>ADD SCORE</h2>
         </button>
         </div>
        </div>
    )
}

export default Score;
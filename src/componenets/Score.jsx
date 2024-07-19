import React, { useState, useEffect } from "react";
import Card from "./Card";
import Addscore from "./Addscore";
import { TransitionGroup, CSSTransition } from "react-transition-group";


function Score() {
    const [visible, setvisible] = useState(false);
    const [tasks, settasks] = useState([]);
    const [recenttask, setrecenttask] = useState({ item: null, index: null });

    function toggle() {
        setvisible(prev => !prev);
    }

    function parseTimeToSeconds(time) {
        const [hours, minutes, seconds] = time.split(":").map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    }

    function Additem(item, event) {
        event.preventDefault();
        settasks(prev => {
            const newTasks = [...prev, item];
            newTasks.sort((a, b) => parseTimeToSeconds(a.score) - parseTimeToSeconds(b.score));
            const index = newTasks.indexOf(item);
            setrecenttask({ item, index });
            return newTasks;
        });
    }

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    function Scrolltofooter()
    {
        document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="score">
            {visible ? <Addscore onclose={toggle} add={Additem} /> : null}
            <button className="arrow" onClick={Scrolltofooter}><img  src="/ScoreBoard_React/assets/arrow.png" alt="" /></button>
            <div className="card-desc">
                <div className="serial">
                    <img src="/ScoreBoard_React/assets/trophy.png" alt="" />
                </div>
                <div className="details">
                    <div className="name">
                        <h2>NAME</h2>
                    </div>
                    <div className="time">
                        <img src="/ScoreBoard_React/assets/timer.png" alt="" />
                        <h2>TIME</h2>
                    </div>
                </div>
            </div>
            <TransitionGroup>
                {tasks.slice(0, 10).map((task, index) => (
                    <CSSTransition key={index} timeout={500} classNames="card">
                        <Card id={index} username={task.username} score={task.score} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
            {tasks.length > 0 && (
                <>
                    <div className="recent">
                        <h2>RECENT ENTRY</h2>
                    </div>
                    <CSSTransition key={recenttask.index} timeout={500} classNames="card">
                        <Card id={recenttask.index} username={recenttask.item.username} score={recenttask.item.score} />
                    </CSSTransition>
                </>
            )}
            <div className="add">
                <button onClick={toggle}><h2>ADD SCORE</h2></button>
            </div>
        </div>
    );
}

export default Score;

import React from "react";


function Card(props)
{
    let cardClass = 'card';
    let serialClass = 'serial';
    let detailsClass = 'details';
    let reward="";
    switch (props.id + 1) {
        case 1:
            cardClass += ' gold';
            serialClass += ' gold';
            detailsClass += ' black';
            reward="₹50,000";
            break;
        case 2:
            cardClass += ' silver';
            serialClass += ' silver';
            detailsClass += ' black';
            reward="₹5000";
            break;
        case 3:
            cardClass += ' orange';
            serialClass += ' orange';
            detailsClass += ' black';
            reward="₹500";
            break;
        default:
            break;
    }
   

    return(
        <div className={cardClass}>
            <div className={serialClass}>
                <h1>{props.id+1}</h1>
            </div>
            <div className={detailsClass} >
                <div className="name">
                    <h2>{props.username}</h2>
                </div>
                <div className="reward">
                    <h2>{reward}</h2>
                </div>
                <div className="time">
                    <h2>{props.score}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card;
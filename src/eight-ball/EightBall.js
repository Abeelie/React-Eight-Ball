import React, { useState } from 'react';
import {choice} from '../helpers/helpers';
import './eight-ball.css';

const EightBall = (props) => {
    const [msg, setMsg] = useState("Think of a Question.");
    const [color, setColor] = useState("black");

    const [greenCount, setGreenCount] = useState(0);
    const [redCount, setredCount] = useState(0);
    const [goldenrodCount, setGoldenrodCount] = useState(0);

    const change = () => {
        const random = choice(props.answers);
        const msg = random.msg;
        const color = random.color;
        setMsg(msg);
        setColor(color);

        counter();
    }

    const reset = () => {
        setMsg("Think of a Question")
        setColor("black")
        setGreenCount(0)
        setredCount(0)
        setGoldenrodCount(0)
    }

    const counter = () => {
        if(color === "green") setGreenCount(greenCount + 1);
        if(color === "red") setredCount(redCount + 1);
        if(color === "goldenrod") setGoldenrodCount(goldenrodCount + 1);
    }

    return (
        <>
            <h1 className="title">Magic EightBall</h1>
            <div className="eight-ball-outer" 
                 onClick={change} 
                 style={{ backgroundColor: color}}>
                <h3 style={{color: "white"}}>{msg}</h3>
            </div>
            <p className="count">Number of times for green: {greenCount}</p>
            <p className="count">Number of times for red: {redCount}</p>
            <p className="count">Number of times for goldenrod: {goldenrodCount}</p>
            <button className="restart-btn" onClick={reset}> Restart</button>
        </>
    )
}




export default EightBall
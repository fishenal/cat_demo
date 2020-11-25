import React from 'react'
import logo from './assets/akqa-outline-white.svg';
import arrow from './assets/arrow.png';
import { useHistory } from "react-router-dom";

export default function LandingPage() {
    let history = useHistory();
    console.log(history)
    return (
        <>
            <div className="logo">
                <img src={logo} alt="AKQA"/>
            </div>
            <div className="arrow" onClick={() => { history.push('/cats') }}>
                <img src={arrow} alt="AKQA"/>
            </div>
        </>
    )
}

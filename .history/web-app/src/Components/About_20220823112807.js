import React from 'react';
import '../Styles/About.css';

// this is function to console log hello 
const sayHello = () => {
    console.log('hello')
}

const About = () => {
    return (
    <>
    <Header> hello </header>
    <div className = 'body'>
        <h1>HotSoup Website</h1>
        <p> Some random text for now. </p>
        <button onClick={sayHello}> hi </button>
    </div>
    </>
    )
}

export default About;
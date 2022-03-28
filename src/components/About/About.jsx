import React from 'react'
import "./about.css"
import Me from '../../img/Me.jpeg'


const About = () => {

    return (
        <section className="a">
            <div className="a-left">
                <h1 className='a-title'>About Me</h1>
                
                <p className='a-desc'>
                    I am a freelance website designer and developer from Charlotte, North Carolina. I am currently in the UNC Charlotte coding bootcamp. I hope you like my creations.
                </p>

                <h2> Skills </h2>
                <div className="a-button">
                    <a href='../../Software Resume 2022.pdf' download="" className='a-button'>
                        <button> Download CV </button> </a>
                </div>
            </div>
            <div className="a-right">
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img className="a-Img" src={Me} alt="Connie Smiling" />
                </div>
            </div>
        </section>
    )
}


export default About
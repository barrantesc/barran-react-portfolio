import React from 'react'
import './nav.css'

const nav = () => {

    

  return (
    <div className='n'>
        <div className='n-wrapper'>
            <div className='n-left'>
                <h1> 
                    <a href="/">Connie Barrantes</a>
                </h1>
            </div>
            <div className='n-right'>
                <ul>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                    <li>
                        <a href="#about">Resume</a>
                    </li>
                </ul>
            </div>
           
        </div>
    </div>
  )
}

export default nav
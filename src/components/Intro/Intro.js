import React from 'react'
import "./intro.css"
// import Me from '../../img/Me.jpeg'

const intro = () => {
  return (
    <div className='i'> 
        <div className='i-left'> 
            <div className='i-left-wrapper'>
                <h2 className='i-intro'> Hello, my name is</h2>
                <h1 className='i-name'> Connie Barrantes</h1>
                {/* <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'> Web Developer</div>
                    </div>
                </div> */}
                <p className='i-desc'>
                    I'm a software developer
                </p>
            </div>
        </div>

        {/* Move image to about me */}
        {/* <div className='i-right'> 
            <img src={Me} alt='picture of me' className='i-img'/>
        </div> */}
    </div>
  )
}

export default intro
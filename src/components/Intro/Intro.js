import React from 'react'
import "./intro.css"

const intro = () => {
  return (
    <section className='i'> 
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
    </section>
  )
}

export default intro
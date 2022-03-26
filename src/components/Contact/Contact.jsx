import React from 'react';
import Contact from './contact.css';
import Phone from '../../img/#.png';
import Email from '../../img/letter.png';
import Github from '../../img/GH.png';
import LinkedIn from '../../img/LI.png';

const contact = () => {

  return (
    <section className='c'>
        <div className='c-wrapper'>
            <h1 className='c-title'>
                Get in touch
            </h1>
            <div className='c-info'>
                <div className='c-info-item'>
                    <a href="tel:980-318-3163">
                    <img
                        src={Phone}
                        alt=''
                        className='c-icon'
                    />
                    </a>
                </div>
                <div className='c-info-item'>
                    <a href="connie.s.barrantes@gmail.com">
                    <img
                        src={Email}
                        alt=''
                        className='c-icon'
                    />
                    </a>
                </div>
                <div className='c-info-item'>
                    <a href="https://github.com/barrantesc">
                    <img
                        src={Github}
                        alt=''
                        className='c-icon'
                    />
                    </a>
                </div>
                <div className='c-info-item'>
                    <a href="https://www.linkedin.com/in/connie-barrantes/">
                    <img
                        src={LinkedIn}
                        alt=''
                        className='c-icon'
                    />
                    </a>
                </div>
            </div>
        </div>
        {/* <div className='c-right'>
            <p className='c-desc'> 
                Always available for freelancing if the right project comes along.
            </p>
            <form >
                <input type="text" placeholder='Name' name="user_name"/>
                <input type="text" placeholder='Subject' name="user_subject"/>
                // <input type="text" placeholder='Email' name="user_email"/>
                <textarea rows="5" placeholder='Message' name='message'/>
                <button>Submit</button>
            </form>
        </div> */}
    </section>
  )
}

export default contact
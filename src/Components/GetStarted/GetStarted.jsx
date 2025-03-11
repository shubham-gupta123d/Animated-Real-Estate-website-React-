import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
   <section className="g-wrapper" id='get-started'>
    <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
            <span className='primaryText'>Get Started with Homyz</span>
            <span className='secondaryText'>Subscirbe and find super attractive price quoted from us.
                <br />
                Find your residence soon
                </span>
               <button className='button'>
                <a href="mailto:shubhamgupta7667@gmailcom">Get Started</a>
               </button>
                
        </div>
    </div>
   </section>
  )
}

export default GetStarted

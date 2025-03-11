import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
 <section className="c-wrapper" id='contact-us'>
    <div className="paddings innerWidth flexCenter c-container">
        {/*left side*/}
        <div className=" flexColStart c-left">
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'>Easy to Contact us</span>
            <span className='secondaryText'>We always ready to help by providing the best services believe a good blace to live can make your life better</span>
            
            <div className="flexColStart contactModes">
                {/*first row*/}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size ={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'>+91 9155244664</span>
                            </div>
                        </div>
                        <div className="flexCenter button"onClick={() => window.location.href = "tel:+9155244664"}>
                            Call Now
                        </div>
                    </div>

                    {/* second mode*/}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size ={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Chat</span>
                                <span className='secondaryText'>+91 9155244664</span>
                            </div>
                        </div>
                        <div className="flexCenter button" >
                        <a href="https://wa.me/9155244664?text=Hi,%20I%20want%20to%20share%20my%20location" 
                          target="_blank" 
                          rel="noopener noreferrer">
                            Chat Now
                            </a>
                        </div>
                    </div>
                </div>


                {/*Second row*/}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size ={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'> Video Call</span>
                                <span className='secondaryText'>+91 9155244664</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                        <a href="https://wa.me/9155244664" target="_blank" rel="noopener noreferrer">
                                 Video Call Now
                                    </a>
                          
                        </div>
                    </div>

                    {/* Fourth mode*/}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size ={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Message</span>
                                <span className='secondaryText'>+91 9155244664</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                        <a href="https://wa.me/9155244664?text=Hi,%20I%20want%20to%20share%20my%20location" 
                          target="_blank" 
                          rel="noopener noreferrer">
                            Message Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>




        </div>

        {/* right side */}
        <div className="c-right">
            <div className="image-container">
                <img src="./contact.jpg" alt="" />
            </div>
        </div>
    </div>
 </section>
  )
}

export default Contact

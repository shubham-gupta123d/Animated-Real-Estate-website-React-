import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import './Header.css'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened)=>{
    if(document.documentElement.clientWidth <=800){
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
   <section className = "h-wrapper" id='contact'>
    <div className=" flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler   /*outside click using handler*/
        onOutsideClick={()=>{     
          setMenuOpened(false);
        }}
        >
        <div className="flexCenter h-menu "
        style={getMenuStyles(menuOpened)}
        >
            <a href="#residencies">Residencies</a>
                <a href="#our-value"> Our Value </a>
                  <a href="#contact-us">Contact US</a>
                    <a href="#get-started">Get Started</a>
                    <button className='button'>
                        <a href="mailto:shubhamgupta7667@gmailcom">Contact</a>
                    </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick = {()=>setMenuOpened((prev)=>!prev)}>
      <BiMenuAltRight size ={30}/>
    </div>
    </div>

   </section>
  )
}

export default Header

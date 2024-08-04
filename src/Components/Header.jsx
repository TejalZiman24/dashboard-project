import React from 'react'
import './Header.css'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
import { FaToggleOff } from "react-icons/fa6";


const Header = (props) => {
  return (
    <header className={`header ${props.mode}`}>
      
    <div className='menu-icon' >
       <BsJustify className='icon' />
    </div>
    <div className='header-left'>
      
       <BsSearch className='icon'/>
       <input className='search-text' type="search"placeholder="Search..." aria-label="Search"/>
       
    </div>
    <div className='header-right'>
    
     <BsFillBellFill className='icon'/>
     <BsFillEnvelopeFill className='icon'/>
     <BsPersonCircle className='icon'/>
     <FaToggleOff className='icon' onClick={props.togglemode}/>
     </div>
    
   </header>
  )
}

export default Header

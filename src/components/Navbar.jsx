import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered,faPlus,faMinus, faXmark} from '@fortawesome/free-solid-svg-icons'
import "../Styles/navbar.css"

export default function Navbar({navbarState}) {
    const [isNavbarLinkClicked, setIsNavbarLinkClicked] = useState({
        home : false,
        menu : false,
        aboutUs : false,
        reservations : false,
        gallery: false
    })
    const {home,menu,aboutUs,reservations,gallery} = isNavbarLinkClicked  
  return (
    <nav className={!navbarState ? null : "opened"}>
      <ul className='navbar-links'>
        <li>
            <a href='#'>Home</a>
        </li>
        <li >
            <div>
            <a 
                href='#' 
                className={ !menu? null : 'active'} 
                onClick={()=>{setIsNavbarLinkClicked({...isNavbarLinkClicked, menu : !menu })}}>Menu</a>
            {
                !menu
                ? <FontAwesomeIcon icon={faPlus} className='svg-icon2'/>
                : <FontAwesomeIcon icon={faMinus} className='svg-icon2'/> 
            }
            </div>
            <ul className={ !menu? 'dropdown' : 'dropdown active'}>
                <li><a href="#">Lunch</a></li>
                <li><a href="#">dinner</a></li>
                <li><a href="#">drinks</a></li>
                <li><a href="#">special menus</a></li>
            </ul>    
        </li>
        <li>
            <a href='#'>About us</a>  
        </li>
        <li>
            <a href='#'>Reservations</a>  
        </li>
        <li>
            <a href='#'>Gallery</a>  
        </li>
      </ul>
    </nav>
  )
}

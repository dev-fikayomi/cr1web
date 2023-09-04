import React,{useState} from 'react'
import "../Styles/landingpage.css"
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered,faPlus,faMinus, faXmark} from '@fortawesome/free-solid-svg-icons'


export default function LandingPage() {
    const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  return (
    <>
        <Navbar navbarState={isNavbarOpened} />
        <div className='logo'>
                    CR1
        </div>
        {
            !isNavbarOpened
            ? <FontAwesomeIcon onClick={()=>{setIsNavbarOpened(true)}} icon={faBarsStaggered} size="2xl"  className='svg-icon'/>
            : <FontAwesomeIcon onClick={()=>{setIsNavbarOpened(false)}} icon={faXmark} size="2xl"  className='svg-icon xmark'/>
        }
        <video autoplay>
            <source 
                src="https://eadn.co.uk/wp-content/uploads/2023/07/EADN-Website-2-LOW-3.mp4" 
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    </>
  )
}

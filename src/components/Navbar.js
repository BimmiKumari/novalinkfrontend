import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import Image from '../assets/logo.png'
import { FiHome } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";
import { DiJoomla } from "react-icons/di";
import { CiLogout } from "react-icons/ci";
import { FaCameraRetro } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { FaUsers } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className='loGo'>NovaLink <img src={Image} alt='not loaded' width='50px'  /> </h1>
        </Link>
        <nav style={{color:'white'}} >
          {user && (
            <div style={{color:'white',columnGap:'40px'}}>
              <Link to="/" style={{color:'white',margin:'10px'}}><FiHome /> Home </Link>
              <Link to="/Help"  style={{color:'white',margin:'10px'}}> <DiJoomla /> Help Center</Link>
              <Link to="/profile" style={{color:'white' ,margin:'10px'}}><FiUser /> profile </Link>
              <Link to="/record"  style={{color:'white',margin:'10px'}}><FaCameraRetro /> Visual</Link> 
              <Link to="/calender"  style={{color:'white',margin:'10px'}}><SlCalender /> Calender</Link> 
              <a href='https://portalnova.netlify.app/' style={{color:'white',margin:'10px'}}><FaUsers /> Portal</a> 
              <a href='https://novalinktaskmanager.netlify.app/'style={{color:'white',margin:'10px'}}><GrUserManager /> Task Manager</a>

             <button style={{color:'#02042a'}}> <a href='https://novavirtualroom.netlify.app/'><FiMonitor /> Meeting Room</a></button>
               <button onClick={handleClick}><CiLogout /> Log out</button>
              
            </div>
          )}
          {!user && (
            <div style={{display:'flex',flexDirection:'row'}}>
              <Link to="/login"> <button className="navpoint">LogIn</button></Link>
              <Link to="/signup"><button className="signupp"><FaLongArrowAltRight /> SignUp</button></Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
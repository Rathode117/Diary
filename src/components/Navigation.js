import {NavLink, Link, json, Navigate, useNavigate} from 'react-router-dom';  //NavLink is used to navigate the application,it also has some other functionalities discussed later. 
import './styles.css';  //importing for styling
import TopImg from '../images/TopImg.png';
import { useEffect, useState } from 'react';

function Navigation(){
  const navigate = useNavigate();
  const[user, setuser] = useState();
  const [logoutbutton, setlogoutbutton] = useState("none");
  const [show, setshow] = useState("flex");


  useEffect(()=>{
    let email = sessionStorage.getItem("email");
    if(email){
    setuser(email);
    setshow("none");
    setlogoutbutton("flex");
    }
    
  }
  );
  
  const logout=()=>{
    sessionStorage.removeItem("email");
    setuser();
    setshow();
    setlogoutbutton("none");
    navigate("/login");
  }

  return(

    <>
   <div className='mydiv' >
   <div className='divloginnav'>
   <ul className='loginnav'>
   <li className='navitem'><Link  className="loginitem" to="/home">{user}</Link></li> 
        <li style={{display: show}}  className='navitem'><Link  className="loginitem" to="/login">login</Link></li> 
        <li style={{display: show}} className='navitem'><Link className = "loginitem"  to="/signup"> signup</Link></li>
       <button  style={{display: logoutbutton}} onClick={logout}>logout</button>
      </ul>
   </div>
   <img className='TopImg' src={TopImg} alt="toplogo"/>
      <ul className='nav'>
        <li className='navitem'><NavLink className="item" activeClassName="active" to="/home">Home</NavLink></li> 
        <li className='navitem'><NavLink className="item" activeClassName="active" to= "/write">Write</NavLink></li>
      </ul>
      <div className="horizontal-line"></div>
    </div>
    </>
   
  );


}

export default Navigation;
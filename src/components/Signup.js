import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import loginavatar from '../images/loginavatar.jpg';
import './styles.css';

import axios from "axios";

function Signup(){

  const [input,setinput] = useState({});
  const navigate   = useNavigate();

  
  const usersignup = ()=>{

    
    axios.post('https://diary-data-api.onrender.com/users', {
      "name": `${input.name}`,
      "email": `${input.email}`,
      "password": `${input.password}`
    })
    .then(function (response) {
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  const handleSubmit =  (event) => {
    event.preventDefault();
     usersignup();   //cookies
     navigate("/login");
  }

  const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setinput(values=>({...values,[name]:value}));
  }
  return(
    <>
    <div className="divloginform">
      <img className="loginavatar" src={loginavatar} alt="icon" />
      <form className="loginform" onSubmit={handleSubmit} >
        <input className="inputfields" onChange={handleChange} type="text" name="name"  placeholder="Enter Your Name"/>
        <input  className="inputfields" onChange={handleChange} type="email" name="email" placeholder="abc@gmail.com"></input>
        <input className="inputfields" onChange={handleChange} type="password" name="password" placeholder="password" />
        <input className="submitbutton" type="submit" />
      </form>
    </div>
   



    </>
  );

}
export default Signup;
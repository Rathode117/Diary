import { useEffect, useState } from "react";
import loginavatar from '../images/loginavatar.jpg';
import './styles.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Writepoem(){
  const navigate = useNavigate();

  useEffect(()=>{
    let email = sessionStorage.getItem("email")
    console.log(email);
    if(email==undefined || email===null){
      navigate("/login");
    }
  },[]);



  const [diaryinput,setdiaryinput] = useState({});

  const currentdate =()=>{
    const today = new Date();
    const x = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    return x;
  };

  const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setdiaryinput(values=>({...values,[name]:value}));
  }
  
  const myemail = sessionStorage.getItem("email");   //email


    const postdiary = ()=>{
    axios.post('https://diary-data-api.onrender.com/poems', {
      "email": `${myemail}`,
      "fname": `${diaryinput.fname}`,
      "date": `${currentdate()}`,
      "diarydata":`${diaryinput.diary}`
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(diaryinput.fname);
    postdiary();
    navigate("/home");
  }

  return(
    <>
    <div className="divloginform">
      <form className="loginform" onSubmit={handleSubmit} >
      <label htmlFor="date">Felt: </label>
        <input className="inputfields" onChange={handleChange} type="text" name="fname"  placeholder="How was your Day?"/>
        <label htmlFor="date">Date: </label>
        <input  className="inputfields" onChange={handleChange} readonly="true" type="date" defaultValue={currentdate()} name="date" placeholder="Date"></input>
        <br/>
        <label htmlFor="diary">Dear Diary, </label>
        <textarea
        onChange={handleChange}
        name="diary"
        placeholder="Write here..."
        rows={20}
        cols={60}
      />
      <br/>
        <input className="submitbutton" type="submit" />
      </form>
    </div>
   



    </>
  );

}
export default Writepoem;
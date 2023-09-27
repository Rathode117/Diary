import { useState , useEffect} from "react";
import loginavatar from '../images/loginavatar.jpg';
import './styles.css';
import { useNavigate } from "react-router-dom";

function Login(props){
  const [input,setinput] = useState({});
  const [error,seterror] =useState();
  const [pass,setpass] = useState();
  const [user,setuser] = useState({});
  const [logged, setlogged] = useState(false);

  const navigate = useNavigate();

  const loginattempt = ()=>{
      fetch(`https://diary-data-api.onrender.com/users?email=${input.email}`)
      .then(Response=>Response.json())
      .then(data=>{
          if(data.length<1){
            setuser({});
            seterror("Email not found");
          }
          else{
            seterror();
            if(input.password!=data[0].password){
              setpass("wrong password");
            }
            else{
              setpass();
              setlogged(true);    //cookies
              sessionStorage.setItem("email", input.email);
              navigate("/home");
  
              
            }
          }
      })};

  const handleSubmit = (event) => {
    event.preventDefault();
    loginattempt();
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
      <label htmlFor="email">Your Email: {error}</label>
        <input className="inputfields" onChange={handleChange} type="email" name="email"  placeholder="Enter Your email"/>
        <label htmlFor="password">{pass}</label>
        <input className="inputfields" onChange={handleChange} type="password" name="password" placeholder="password" />
        <input className="submitbutton" type="submit" />
      </form>
    </div>
   
    </>
  );

}
export default Login;
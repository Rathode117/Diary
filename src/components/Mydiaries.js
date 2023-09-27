import { useEffect, useState } from 'react';
import './styles.css';


function Mydiaries(props){ 
  
  const [diary, setdiary] = useState([{}]);
  const [dataa, setdataa] = useState("flex");
  const [notlog, setnotlog] = useState("flex");
  

    useEffect(() => {
      let email = sessionStorage.getItem("email");
      if(email){
        setnotlog("none");
      }
      else{
        setdataa("none");
      }
      fetch(`https://diary-data-api.onrender.com/poems?email=${email}&_sort=date&_order=desc`)
      .then(Response=>Response.json())
      .then(data=>{
        setdiary(data);
        if(data.length>=1){
          setdataa("none");
        }
      })
    })

    if(notlog=="flex"){
      return(
        <>
        <div style ={{width: "80vw",} }>
          <h1>You need to login first</h1>
        </div>
        </>
      );
    }

    else{


  return (
    <>
    <div className="fromhome">
    <h2 style={{display:notlog}}>You need to login first</h2>
    <h2 style={{display:dataa}}>No diaries found</h2>
    { 
      diary.map(element => {
        return (
          <div className='poempage1'>
         <h1 style={{ margin:0 , color: "red" }}>{element.fname}</h1>
          <h2 style={{ margin:0}}>{element.date}</h2>
           <h3>
           {element.diarydata}
          </h3>
          </div>
        );
      })}
      
      
    





    </div>
      

    </>

    
  );
    }

}

export default Mydiaries;
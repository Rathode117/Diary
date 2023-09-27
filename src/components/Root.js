import { useState } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import {Outlet} from 'react-router-dom';
 //This is the component that gets rendered on all Pages.
  const Root =()=>{
    return (
      /*Note the Order of elements in here, first id Navigation at top , then all the other components that get rendered when
        in place of the <Outlet/> (the body based on the route the user is, could be about or SomeOtherPage) and then the footer.
        */
      //Outlet acts as a place holder for new components that get rendered.
      <>  <Navigation/>    
        <Outlet/>
        <Footer/> </>
      
  
    )
  
  }

  export default Root;
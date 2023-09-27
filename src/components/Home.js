import { useEffect, useState } from 'react';
import Mydiaries from './Mydiaries';
import PoemSidebar from './PoemSidebar';
import './styles.css';
function Home(props){

  return(
  <>
    <div className='homepage'>
        <Mydiaries />
        <PoemSidebar/>
    </div> 
  </>

  );

}
export default Home;
import { createBrowserRouter, createRoutesFromElements,
  Route, RouterProvider} from 'react-router-dom';      //importing all the required components.
import Home from './components/Home';
import Root from './components/Root';
import Login from './components/login';
import Signup from './components/Signup';
import Writepoem from './components/Writepoem';
import { useState } from 'react';




function App() {
   

  const myrouter = createBrowserRouter(      
    createRoutesFromElements(                
      <Route path = "/" element = {<Root/>}>    
        <Route index path = "/" element = {<Home/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route  path = "/write" element = {<Writepoem />}/>
        <Route  path = "/login" element = {<Login  />}/>
        <Route  path = "/signup" element = {<Signup  />}/>
      </Route>      
    )
  )

  return (
    <>
    <RouterProvider router = {myrouter}/>
    </>      //All data router objects are passed to this component to render your app.
  );
}



export default App;

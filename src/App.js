
import { useState } from "react";
import Nav from "./Components/Navig/Nav";
import UserContext from "./datas/context";
import {Logo} from './datas/menus'
import { Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Conext from "./Components/Conext/Conext";
import styled from 'styled-components'
import './App.css'

function App() { 
  const [Search,setSearch ] = useState() 
  const [Ncolor,setNcolor ] = useState() 
const Div = styled.div({
  color:`${Ncolor}` ,
  height:`100vh`,
});


  return (
    <Div>
    
      <UserContext.Provider value={Logo} className="App"> 
         <Nav search={(e)=>setSearch(e)}/> 
        
         <Routes>
            <Route path="/" exec element={ <Home search={Search} Color={(e)=>setNcolor(e)} /> } />          
            <Route path="/about"  element={ <About /> } />          
            <Route path="/conext"  element={ <Conext /> } />          
         </Routes>  
       </UserContext.Provider>  
       
    </Div>
  );
}

export default App;

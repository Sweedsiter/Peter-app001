
import { useState } from "react";
import Nav from "./Components/Navig/Nav";
import UserContext from "./datas/context";
import {Logo} from './datas/menus'
import { Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Conext from "./Components/Conext/Conext";
import './App.css'



function App() { 
  const [Search,setSearch ] = useState() 
  const [Back,setBack ] = useState() 
  const [Color,setColor ] = useState() 

  return (
    <div style={{color:`${Color}`,backgroundColor:`${Back}`}}>    
      <UserContext.Provider value={Logo} className="App"> 
         <Nav search={(e)=>setSearch(e)}/> 
        
         <Routes>
            <Route path="/" exec element={ <Home  search={Search} Color={(e)=>setColor(e)} PDcolor={(e)=>setBack(e)}/> } />          
            <Route path="/about"  element={ <About /> } />          
            <Route path="/conext"  element={ <Conext /> } />          
         </Routes>  
         
       </UserContext.Provider>  
       
    </div>
  );
}

export default App;

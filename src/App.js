
import { useState } from "react";
import Nav from "./Components/Navig/Nav";
import UserContext from "./datas/context";
import {Logo} from './datas/menus'
import { Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Conext from "./Components/Conext/Conext";

function App() { 
  const [Search,setSearch ] = useState() 
  const [Ncolor,setNcolor ] = useState() 
  const Color = (e)=>{
    setNcolor(e)
  }

  return (
    <div style={{color:`${Ncolor}`}}>
      <UserContext.Provider value={Logo} className="App"> 
         <Nav search={(e)=>setSearch(e)}/>   
         <Routes>
            <Route path="/" exec element={ <Home Search={Search} Color={Color}/> } />          
            <Route path="/about"  element={ <About /> } />          
            <Route path="/conext"  element={ <Conext /> } />          
         </Routes>  
       </UserContext.Provider>
    </div>
  );
}

export default App;

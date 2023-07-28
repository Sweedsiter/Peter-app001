
import Nav from "./Components/Navig/Nav";
import UserContext from "./datas/context";
import {Logo} from './datas/menus'

function App() { 
 
 let df = ""
 const  checklock = {name:"peter",pass:1234}
 if(checklock.name === "peter" && checklock.pass === 1234){
    df = "true" 
 }else{
    df = "false"
 }
 console.log(df)
  return (
    <div>
      <UserContext.Provider value={Logo} className="App"> 
         <Nav checklock={checklock}/>          
       </UserContext.Provider>
    </div>
  );
}

export default App;

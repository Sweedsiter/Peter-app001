
import Nav from "./Components/Navig/Nav";
import UserContext from "./datas/context";
import {Logo,menu} from './datas/menus'

function App() { 
  
  return (
    <div>
      <UserContext.Provider value={{Logo:Logo,menu:menu}} className="App"> 
         <Nav/>          
       </UserContext.Provider>
    </div>
  );
}

export default App;

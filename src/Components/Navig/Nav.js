import React, { useContext } from 'react'
import UserContext from '../../datas/context'
import './Nav.css'
import { FaSearch,FaUserLock } from 'react-icons/fa';

function Nav() { 
    const user = useContext(UserContext)
  
    const login = ()=>{      
    }
   
  return (
    <div className='heat-content'>
        <header className='nav-head'>         
            <div className='head-L'>{user}</div>  

            <div className='head-R'>
                 <div className='R-search'>
                   <FaSearch className='icon-search'/>
                   <input className='input' type='text' placeholder='Search' ></input> 
                 </div> 

                 <ul className='head-R'>
                  <li className='head-R-item' ><a href="/">Home</a></li>  
                   <li className='head-R-item' ><a href="/">About</a></li>                        
                   <li className='head-R-item' ><a href="/">Conext</a></li>                 
                   <button onClick={login} className='login-bt'>
                       <FaUserLock className='icon'/> 
                   </button>
                 </ul>        
            </div>                 
        </header>   
    </div>
  )
}

export default Nav
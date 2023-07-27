import React, { useContext } from 'react'
import UserContext from '../../datas/context'
import './Nav.css'
import { FaSearch,FaUserLock } from 'react-icons/fa';


function Nav() { 
    const user = useContext(UserContext)
   
  return (
    <div className='heat-content'>
        <header className='nav-head'>   
            <div className='head-L'>{user}</div>  
            <ul className='head-R'>
               <li className='head-R-item' ><a href="/">Home</a></li>  
               <li className='head-R-item' ><a href="/">About</a></li>                        
               <li className='head-R-item' ><a href="/">Conext</a></li>                 
                      <FaUserLock className='icon'/>                     
                                   <FaSearch className='icon-search'/>                  
                 <input className='input' type='text' placeholder='' ></input>              
            </ul>
        </header>    
    </div>
  )
}

export default Nav
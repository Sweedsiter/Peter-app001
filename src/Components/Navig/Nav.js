import React, { useContext } from 'react'
import UserContext from '../../datas/context'
import './Nav.css'
import {FaUserLock } from 'react-icons/fa';
import {NavLink } from "react-router-dom"
function Nav() { 
    const user = useContext(UserContext) 
    
  return (
    <div className='heat-content'>
        <header className='nav-head'>         
            <div className='head-L'>{user}</div>  

            <div className='head-R'>
                 <ul className='head-R'>               
                    <li className='head-R-item' ><NavLink to="/" exact   activeClassName="active" >Home</NavLink></li>  
                    <li className='head-R-item' ><NavLink to="/about" exact  activeClassName="active" >About</NavLink></li>  
                    <li className='head-R-item' ><NavLink to="/conext" exact  activeClassName="active" >Conext</NavLink></li>  
                              
                   <button  className='login-bt'>
                       <FaUserLock className='icon'/> 
                   </button>
                 </ul>        
            </div>                 
        </header>   
    </div>
  )
}

export default Nav
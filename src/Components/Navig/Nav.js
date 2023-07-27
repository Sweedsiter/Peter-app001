import React, { useContext } from 'react'
import UserContext from '../../datas/context'
import './Nav.css'

function Nav() { 
    const user = useContext(UserContext)
  return (
    <div className='heat-content'>
        <header className='nav-head'>   
            <div className='head-L'>{user.Logo}</div>  
            <ul className='head-R'>
                {
                    user.menu ? user.menu.map((item,index)=> <li className='head-R-item' key={index}><a href={item.link}>{item.name}</a></li>) : false
                }                    
               <input className='input' type='text' placeholder='search'></input>
            </ul>
        </header>    
    </div>
  )
}

export default Nav
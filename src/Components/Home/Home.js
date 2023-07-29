import React, { useState } from 'react'
import './Home.css'

function Home(props) {
  const {Color,PDcolor} = props
  //Colors
  const [PrValue,setPrValue] = useState() 
  const [Search,setSearch] = useState()

  return (
    <div className='H-contener'>      
       <div className='L setFlex-C'>
          <div className='setColor border-under' >
              <h3 > What You need Color in App?</h3>
              <div className='setFlex-R'>Font color  <input type="color" onChange={(e)=>Color(e.target.value)}/></div> 
              <div className='setFlex-R'>background-Color<input type="color" onChange={(e)=>PDcolor(e.target.value)} /></div>                          
          </div>
          <div className='border-under'>
             <h3>Your search Price ?</h3>
             <div className='setFlex-R'>
                 <input type='range' min="0" max="10000"  onChange={(e)=>setPrValue(e.target.value)} />
                 <p>{PrValue}</p>
             </div>
          </div> 
          <div className='border-under'>  
              <p>Search Text</p>
              <input type="text"  placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
          </div>  
       </div>

       <div className='R'>
        <h1>Items Card</h1>       
        <h1>{Search}</h1>
        <p>{PrValue}</p>
       </div>
    </div>
  )
}

export default Home
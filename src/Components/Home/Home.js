import React, { useState } from 'react'
import './Home.css'

function Home({Search}) {
  const [PrValee,setPrValue] = useState("")
  
  return (
    <div className='H-contener'>
       <div className='L'>
          <h3>Your search?</h3>
          <div>Search  : :  
            <input type='text'/>
          </div>
          <div>
            Start Price
            <input type='range'  min="1000" max="1000000"onChange={(e)=>setPrValue(e.target.value)} />             
            <div>Price : {PrValee}</div>
          </div>         
       </div>

       <div className='R'>
        <h1>Items Card</h1>
        <h1>{Search}</h1>
        <p>{PrValee}</p>
       </div>
    </div>
  )
}

export default Home
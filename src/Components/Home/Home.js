import React, { useState } from 'react'
import './Home.css'

function Home({Search,Color}) {
  const [PrValee,setPrValue] = useState("")
  const [PDcolor,setPDcolor] = useState("")

  
  return (
    <div className='H-contener' >
      
       <div className='L' style={{}}>
          <div>
             Font color  <input type="color" onChange={(e)=>Color(e.target.value)}/>
          </div> 

          <h3>Your search?</h3>
          <div>Search  : :  
            <input type='text' value={PrValee} />
          </div>
          <div>
            Start Price
            <input type='range'  min="1000" max="1000000"onChange={(e)=>setPrValue(e.target.value)} /> 
          </div> 

          <div>          
            <div style={{color:"red"}}> Red
               <input type="checkbox" value="red" exact onChange={(e)=>setPDcolor(e.target.value)} /> 
             </div>
            <div style={{color:"green"}}>
            Green
               <input type="checkbox" value="Green" exact onChange={(e)=>setPDcolor(e.target.value)} /> 
            </div>
          </div>   
             <h2>{PDcolor}</h2>
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
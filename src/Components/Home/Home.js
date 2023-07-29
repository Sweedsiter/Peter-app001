import React, { useState } from 'react'
import './Home.css'
import styled from 'styled-components'

function Home({Color,}) {
  //Colors
  const [PrValue,setPrValue] = useState()
  const [PDcolor,setPDcolor] = useState("")
  const [Search,setSearch] = useState()
  const Div = styled.section({
    background: PDcolor,   
  });
 
  return (
    <div className='H-contener' style={{background: PDcolor,}} >      
       <div className='L setFlex-C' >
          <div className='setColor border-under'>
              <h3> What You need Color in App?</h3>
              <div className='setFlex-R'>Font color  <input type="color" onChange={(e)=>Color(e.target.value)}/></div> 
              <div className='setFlex-R'>background-Color<input type="color" onChange={(e)=>setPDcolor(e.target.value)} /></div>                          
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

       <Div className='R'>
        <h1>Items Card</h1>
        <h1>Items Card2</h1>
        <h1>{Search}</h1>
        <p>{PrValue}</p>
       </Div>
    </div>
  )
}

export default Home
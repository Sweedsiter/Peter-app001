import React, { useState } from 'react'
import './Home.css'
import Data from '../../datas/Data'
import {Link } from "react-router-dom"

function Home(props) {
  const {Color} = props
  //Colors
  const [PrValue,setPrValue] = useState() 
  const [Search,setSearch] = useState()

  const filtersearch = Data.filter((Data)=>{  
   if(Search){
      return ( Data.name.includes(Search))
   }else if(!PrValue){
      return Data
   }else{    
      return Data.price > PrValue
   }
 })

  return (
    <div className='H-contener'>    
     {/* Home L contents */}  
       <div className='L setFlex-C'>
          <div className='setColor border-under' >
              <h3 > What You need Color in App?</h3>
              <div className='setFlex-R'>Font color  <input type="color" onChange={(e)=>Color(e.target.value)}/></div>                   
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
          <div className='border-under'>  
              <p>Search Product</p>
              <ul className='Ull'>
                <li><Link to="/" exact  className='a'  activeClassName="active" >Elictronics</Link></li>
                <li><Link to="/" exact className='a'  activeClassName="active" >Fasion Girl</Link></li>
                <li><Link to="/" exact className='a'  activeClassName="active" >Fasion Boy</Link></li>
                <li><Link to="/" exact className='a'  activeClassName="active" >Fasion Man</Link></li>
                <li><Link to="/" exact className='a'  activeClassName="active" >Fasion Woman</Link></li>
              </ul>
          </div> 
       </div>


       {/* Home R contents */}
       <div className='R'>
           <div className='main-item setFlex-R'>
              <h3>Menu</h3>       
              <h4>Searching...{Search}</h4>
              <p>Price {PrValue}</p>
           </div>
           

            <div className='items setFlex-R'>
                 {
                filtersearch.map((even,index)=>{
                   return(           
                         <div className='item' key={index}>
                                 <img src={even.image} alt="#" ></img> 
                                  <div className='itemB'>
                                    <h3 className='setFlex-R'><p>{even.name}</p> <p>{even.price}</p></h3>                                
                                     <button>Click Details</button>
                                  </div>
                          </div>
                    )})  
                 }   
           </div> 
          
       </div>
    </div>
  )
}

export default Home
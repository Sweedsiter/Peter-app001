import React, { useReducer, useState } from 'react'
import './Home.css'
import Data from '../../datas/Data'
import {Link } from "react-router-dom"

function Home(props) {
  const {Color} = props
  //Colors
  const [PrValue,setPrValue] = useState() 
  const [Search,setSearch] = useState()

  const num = "Click me Plaese"

  const filtersearch = Data.filter((Data)=>{  
   if(Search){
      return ( Data.name.includes(Search))
   }else if(!PrValue){
      return Data
   }else{    
      return Data.price > PrValue
   }
 })
 const reducer =(state,action)=>{
    if(action.type === "Elictronics"){
       return state = "Elictronics"
    }else if(action.type === "Fasion Girl"){
      return state = "Fasion Girl"
    }else if(action.type === "Fasion Boy"){
      return state = "Fasion Boy"
    }else if(action.type === "Fasion Man"){
      return state = "Fasion Man"
    }else if(action.type === "Fasion Woman"){
      return state = "Fasion Woman"
    }
 }
 const [state,dispatch] = useReducer(reducer,num);

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
                <li><Link to="/" exact  className='a'  activeClassName="active" onClick={()=>dispatch({type : "Elictronics"})} >Elictronics</Link></li>
                <li><Link to="/" exact className='a'  activeClassName="active" onClick={()=>dispatch({type : "Fasion Girl"})}>Fasion Girl</Link></li>
                <li><Link to="/" exact className='a'  activeClassName="active" onClick={()=>dispatch({type : "Fasion Boy"})}>Fasion Boy</Link></li>
                <li><Link to="/" exact className='a'  activeClassName="active" onClick={()=>dispatch({type : "Fasion Man"})}>Fasion Man</Link></li>
                <li><Link to="/" exact className='a'  activeClassName="active" onClick={()=>dispatch({type : "Fasion Woman"})}>Fasion Woman</Link></li>
              </ul>
              <h1>{state}</h1>
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
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {


  const store=useSelector(state=>state.counter)
   const dispatch=useDispatch()
   console.log(store)

   function updateHandler(action){
    
    if(action=='I'){
      dispatch({
        type:"Increment"
      })}
      else{
        dispatch({
          type:"Decrement"
        })
      }
    

   }


  return (
    <>
    
     <p>{store}</p>
     <button onClick={()=>updateHandler("D")}>INCREMENT BY 5</button>
     <button onClick={()=>{updateHandler("I")}}>DECREMENT By 5</button>
    </>
  )
}

export default App

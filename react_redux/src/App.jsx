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
    
     <p>{657575}</p>
    </>
  )
}

export default App

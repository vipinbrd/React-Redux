import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navabar } from './components/NavBar';
import { Form } from './components/Form';

function App() {
  const isloggedIn=useSelector((state)=>state.auth)
  console.log(isloggedIn)
  const store=5
  function updateHandler(el){

  }


  return (
    <>
      <Navabar />
      <Form />
      <h1>My Profile</h1>
      <p style={{ fontSize: "2rem" }}>{store}</p>
      <button
        style={{
          padding: "0.5rem 1rem",
          marginRight: "1rem",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
        onClick={() => updateHandler("I")}
      >
        INCREMENT
      </button>

      <button
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
        onClick={() => updateHandler("D")}
      >
        DECREMENT
      </button>
    </>
  );
}

export default App;

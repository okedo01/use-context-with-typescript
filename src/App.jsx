import React, { createContext, useState } from 'react';
import './App.css'
import Btn from './Components/Btn'
import Navbar from './Components/Navbar'

const signInContext = React.createContext();

function App() {
  const [ signIn, setSignIn ] = useState(false);

  const handleClick = () => {
    setSignIn(!signIn);
  }

  return (
    <signInContext.Provider value={{ signIn, handleClick }}>
      <Navbar />
      <Btn />
    </signInContext.Provider>
  )
}

export default App

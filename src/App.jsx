import { useState } from 'react';
import './App.css'
import Btn from './Components/Btn'
import Navbar from './Components/Navbar'

function App() {
  const [ signIn, setSignIn ] = useState(false);

  const handleClick = () => {
    setSignIn(!signIn);
  }

  return (
    <>
      <Navbar signIn={signIn} handleToggle={handleClick} />
    </>
  )
}

export default App

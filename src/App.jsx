import './App.css'
import Navbar from './Components/Navbar'
import Btn from './Components/Btn'
import { useState } from 'react'

function App() {

  const [ signIn, setSignIn ] = useState(false);

  const handleToggle = () => {
    setSignIn(!signIn);
  }

  return (
    <>
      <Navbar signIn={signIn} onClick={handleToggle}/>
    </>
  )
}

export default App

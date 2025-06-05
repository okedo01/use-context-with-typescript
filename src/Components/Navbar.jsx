import React from 'react'
import Btn from './Btn'

const Navbar = ({ signIn, handleToggle }) => {
  return (
    <div>
        <h1> {signIn ? "Welcome User" : "Sign In"} </h1>
        <Btn signIn={signIn} handleToggle={handleToggle} />
    </div>
  )
}

export default Navbar
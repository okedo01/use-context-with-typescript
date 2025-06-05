import React, { useContext } from 'react'
import { signInContext } from '../App';

const Navbar = () => {
    const { signIn, handleClick } = useContext(signInContext);

  return (
    <div>
        <h1> {signIn ? "Welcome User" : "Sign In"} </h1>
    </div>
  )
}

export default Navbar
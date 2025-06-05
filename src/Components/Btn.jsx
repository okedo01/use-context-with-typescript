import React, { useContext } from 'react'
import { signInContext } from '../App';

const Btn = () => {

    const { signIn, handleClick } = useContext(signInContext);

  return (
    <div>
        <button onClick={handleClick}>
            { signIn ? "Sign Out" : "Sign In" }
        </button>
    </div>
  )
}

export default Btn
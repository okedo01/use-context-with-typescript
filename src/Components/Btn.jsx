import React, { useState } from 'react'

const Btn = () => {
    const [ signIn, setSignIn ] = useState(false);
  return (
    <div>
        <h1>Button</h1>
        <button onClick={() => setSignIn(!signIn)}>
            { signIn ? "Sign Out" : "Sign In"}
        </button>
    </div>
  )
}

export default Btn
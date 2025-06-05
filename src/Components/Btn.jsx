import React, { useState } from 'react'

const Btn = ({ signIn, handleToggle }) => {

  return (
    <div>
        <button onClick={handleToggle}>
            { signIn ? "Sign Out" : "Sign In"}
        </button>
    </div>
  )
}

export default Btn
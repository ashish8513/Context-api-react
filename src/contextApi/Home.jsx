import React, { useContext } from 'react'
import { BioContext } from '.'

function Home() {
  const {myName,myAge}=  useContext(BioContext)
  return (
    <>

    <h1>Home context Api , my name is {myName} and my Age is {myAge}</h1>
  
    </>
  )
}

export default Home
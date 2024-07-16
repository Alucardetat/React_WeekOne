import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'

function App() {
 let user = {
  name: 'Chris',
  age: 31
 }
  return (
    <>
      <div className='container'>
        <Header user={user} />
      </div>
    </>
  )
}

export default App
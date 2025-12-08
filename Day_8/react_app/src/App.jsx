import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  

  return (
    <>
    <button>
      MyButton
    </button>
    </>
  )
}

export default function App(){
  return (
    <div>
      <h1>Welcome to App</h1>
      <MyButton />
    </div>
  )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Navbar} from "./components/navbar/navbar";
import {Content} from "./components/content/content";

function App() {
  return (
    <>
      <Navbar />
      <Content />
    </>
  )
}

export default App

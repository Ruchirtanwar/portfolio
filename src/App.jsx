import { useState } from 'react'

import './App.css'
import Navbar from './navbar'
import HeroSection from './HeroSection'
import Footer from './footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Navbar/>
    <HeroSection/>
    <Footer/>
  </div>
  )
}

export default App

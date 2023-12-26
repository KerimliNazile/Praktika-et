import { useState } from 'react'
import './App.css'
import Home from './Pages/HomePage/home'
import Main from './Layout/Main/main'
import About from './Pages/AboutPage/about'
import Contact from './Pages/ContactPage/contact'
import Signup from './Pages/SignUpPage/signup'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Route>
      </Routes>
   
  )
}

export default App

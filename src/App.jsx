import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App

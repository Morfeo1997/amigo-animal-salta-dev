import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Publish from './pages/Publish'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      	<Publish />
      </div>
    </>
  )
}

export default App

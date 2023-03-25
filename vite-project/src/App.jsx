import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [count, setCount,clearItem] = useLocalStorage("count",0);

  return (
    <div className="App">

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <div className="card">
        <button onClick={() => clearItem("count")}>
          Clear
        </button>
        
      </div>
     
    </div>
  )
}

export default App

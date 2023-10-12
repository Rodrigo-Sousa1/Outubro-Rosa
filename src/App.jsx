import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/header.jsx'
import Main from './components/Main/index.jsx'
import Footer from './components/Footer/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>   
    </>
  )
}

export default App

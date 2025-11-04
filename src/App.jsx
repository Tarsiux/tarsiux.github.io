import { useState } from 'react'
import Background from './components/ui/common/Background'
import NavBar from './components/ui/layout/NavBar'
import Header from './components/ui/layout/Header'
import Main from './components/ui/layout/Main'
import Footer from './components/ui/layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <NavBar />
      <Header />
      <Main />
      {/* <div className='h-[2400px]'></div> */}
      <Footer />
    </div>
  )
}

export default App

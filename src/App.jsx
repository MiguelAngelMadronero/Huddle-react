
import './App.css'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Main } from './components/Main'
import { Navbar } from './components/Navbar'

function App() {
 

  return (
    <>
     <header className="hero">
     <Navbar/>
      <Hero/>
     </header>
     <Main/>
     <Footer/>
    </>
  )
}

export default App

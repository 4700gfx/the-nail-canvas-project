
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Testimony from './components/Testimony'
import Pricing from './components/Pricing'

function App() {

  return (
    <div className='App'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Benefits></Benefits>
      <Testimony></Testimony>
      <Pricing></Pricing>
    </div>
  )
}

export default App
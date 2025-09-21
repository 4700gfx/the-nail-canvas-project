
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Testimony from './components/Testimony'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import CallToAction from './components/CallToAction'
import MeetMe from './components/MeetMe'  
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'


function App() {

  return (
    <div className='App'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Benefits></Benefits>
      <Pricing></Pricing>
      <Testimony></Testimony>
      <Gallery></Gallery>
      <CallToAction></CallToAction>
      <MeetMe></MeetMe>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  )
}

export default App
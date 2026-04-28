import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

import './App.css'


function App() {

  return (

    <div>
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer></Footer>

    </div>

  )

}

export default App



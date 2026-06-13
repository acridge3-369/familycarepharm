import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import RefillPrescription from './pages/RefillPrescription'
import Walkthrough from './pages/Walkthrough'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/walkthrough" element={<Walkthrough />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prescriptions" element={<RefillPrescription />} />
          <Route path="/refill-prescription" element={<RefillPrescription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

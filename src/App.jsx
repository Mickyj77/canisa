import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/navbar'
import Home from "./pages/home/home"
import Footer from "./components/footer/footer"
import Contact from "./pages/contact/contact"
import About from "./pages/about/About"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
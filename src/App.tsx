import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Resume from "./pages/Resume"

function App() {
  return (
    <div className="max-w-8xl min-h-screen bg-darkgray text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <div className="mx-0">
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App

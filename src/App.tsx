import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ProjectDetailBento from './components/ ProjectDetailBento'
import ProjectDetail from './components/ProjectDetail'
import ProjectDetailApple from './components/ ProjectDetailApple'

// di dalam <Routes>

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-bento/:id" element={<ProjectDetailBento />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/project-apple/:id" element={<ProjectDetailApple />} />
    </Routes>
  )
}

export default App
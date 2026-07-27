import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
function App() {
  const redes = ['Github', 'Linkedin', 'Instagram']
  return (
    <Router>
        <Navbar />
        <Container customClass='min-height' >
          <div style={{ color: 'blue' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </Container>
        <Footer autor="Vinicius" ano={2025} estaLogado={false} redesSociais={redes}
        />
    </Router>
  );
}

export default App;

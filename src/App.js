
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Footer from './components/footer';
import Projects from './components/projects';

function App() {
  return (
    <div>
       <Navbar />
       <Home />
       <About />
       <Projects />
       <Footer />
    </div>
  );
}

export default App;

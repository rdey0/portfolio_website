import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar.js'
import Banner from './components/banner.js'
import About from './components/about.js'
import Portfolio from './components/portfolio.js'
import Contact from './components/contact.js'
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <NavBar/>
        <Banner/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    </ParallaxProvider>
  );
}

export default App;

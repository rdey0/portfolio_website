import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar.js'
import Banner from './components/banner.js'
import About from './components/about.js'
import Portfolio from './components/portfolio.js'
import Contact from './components/contact.js'
import { ParallaxProvider } from 'react-scroll-parallax';

//Start at top of page on refresh instead of saving position
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;

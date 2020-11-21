import './App.css';
import NavBar from './components/navbar.js'
import Homepage from './components/homepage.js'
import About from './components/about.js'
import Skills from './components/skills.js'
import Portfolio from './components/portfolio.js'
import Contact from './components/contact.js'

//Start at top of page on refresh instead of saving position
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;

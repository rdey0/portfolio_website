import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar.js'
import Banner from './components/banner.js'
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <NavBar/>
        <Banner/>
      </div>
    </ParallaxProvider>
  );
}

export default App;

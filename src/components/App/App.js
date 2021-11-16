import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import NavBar from '../Nav/Nav'
import Entry from '../Entry/Entry'
import Terminal from '../Terminal/Terminal'
import Languages from '../Languages/Languages'
import { useEffect } from 'react'


function App() {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  // hjkl: Navigate the page with vim keys
  document.body.onkeydown = e => {
    switch (e.key) {
      case 'j':
      case 'J':
        window.scrollBy({
          top: window.innerHeight / 2,
          left: 0,
          behavior: 'smooth',
        })
        break
      case 'k':
      case 'K':
        window.scrollBy({
          top: -window.innerHeight / 2,
          left: 0,
          behavior: 'smooth',
        })
        break
      default:
        break
    }
  }

  return (
    <div className="App">
      {/*<NavBar />*/}

      <Entry />

      <div data-aos='fade-up'>
        <Terminal />
      </div>

      <div data-aos='fade-up' data-aos-duration={1500}>
        <Languages />
      </div>

    </div>
  );
}

export default App;

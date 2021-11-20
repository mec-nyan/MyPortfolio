import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import NavBar from '../Nav/Nav'
import Entry from '../Entry/Entry'
import Terminal from '../Terminal/Terminal'
import Languages from '../Languages/Languages'
import Education from '../Education/Education'
import Work from '../Work/Work'
import Portfolio from '../Portfolio/Portfolio'

import mecGamesHome from '../img/mecGamesHome.png'
import mecGamesMain from '../img/mecGamesMain.png'
import waveMusicHome from '../img/waveMusicHome.png'
import weatherAppHome from '../img/weatherApp.png'
import portfolioHome from '../img/portfolio.png'
import { mecGames, waveMusic, weatherApp, myPortfolio } from './projects'

import { useEffect } from 'react'


const urlWaveMusic = 'https://proyecto-grupal-18c81.web.app'
const urlWeatherApp = 'https://whatever-the-weather-e0062.web.app'
const urlMecGames = 'https://proyecto-individual-videogames.web.app'


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
      case 'u':
      case 'U':
        window.scrollBy({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth',
        })
        break
      case 'i':
      case 'I':
        window.scrollBy({
          top: -window.innerHeight,
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
        <Education />
      </div>

      <div data-aos='fade-up'>
        <Terminal />
      </div>

      <div data-aos='fade-down'>
        <Work />
      </div>

      <div data-aos='fade-up'>
        <Portfolio image={mecGamesHome} extUrl={urlMecGames} description={mecGames} flipped={false} />
      </div>

      <div data-aos='fade-up'>
        <Portfolio image={waveMusicHome} extUrl={urlWaveMusic} description={waveMusic} flipped={true} />
      </div>

      <div data-aos='fade-up'>
        <Portfolio image={weatherAppHome} extUrl={urlWeatherApp} description={weatherApp} flipped={false} />
      </div>

      <div data-aos='fade-up'>
        <Portfolio image={portfolioHome} extUrl={false} description={myPortfolio} flipped={true} />
      </div>

      <div data-aos='zoom-in'>
        <Languages />
      </div>

    </div>
  );
}

export default App;

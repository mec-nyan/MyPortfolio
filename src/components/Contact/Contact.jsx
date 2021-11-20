import './contact.css'
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaReact,
  FaHeart,
  FaCopyright
} from 'react-icons/fa'
import mecNyan from '../img/mec-nyan.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const urlGithub = 'https://github.com/mec-nyan'
const urlLinkedin = 'https://linkedin.com/in/mariano-eloy-collantes'
const urlMail = 'marianoraspberrypi@gmail.com'
const urlTorre = ''


export default function Contact() {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <div className='contactContainer'>
      <div className='personalLogo'>
        <img src={mecNyan} alt='Mec Nyan' />
      </div>

      <h2 data-aos='fade-right'>Contact</h2>
      <div data-aos='fade-left' className='contactUnderline'></div>

      <div className='linkContainer'>
        <div className='eachLink'>
          <a href={urlGithub} rel='noreferred' target='_blank'>
            <div className='ballLink'><FaGithub /></div>
          </a>
          <p>Github</p>
        </div>
        <div className='eachLink'>
          <a href={urlLinkedin} rel='noreferred' target='_blank'>
            <div className='ballLink'><FaLinkedin /></div>
          </a>
          <p>Linkedin</p>
        </div>
        <div className='eachLink'>
          <a href={`mailto:${urlMail}`} rel='noreferred' target='_blank'>
            <div className='ballLink'><FaRegEnvelope /></div>
          </a>
          <p>e-mail</p>
          <small className='darker'>marianoraspberrypi@gmail.com</small>
        </div>
      </div>

      <div className='footerSeparator'></div>
      <footer>
        <small>Made with <FaHeart /> by Mariano Eloy Macri Collantes</small>
        <small><code>&lt; mec-nyan /&gt;</code> <FaReact /> november 2021</small>
      </footer>

    </div>
  )
}

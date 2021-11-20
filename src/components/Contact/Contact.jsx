import './contact.css'
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaReact
} from 'react-icons/fa'
import mecNyan from '../img/mec-nyan.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const urlGithub = ''
const urlLinkedin = ''
const urlMail = ''
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
        <div className='ballLink'><FaGithub /></div>
        <div className='ballLink'><FaLinkedin /></div>
        <div className='ballLink'><FaRegEnvelope /></div>
      </div>

    </div>
  )
}

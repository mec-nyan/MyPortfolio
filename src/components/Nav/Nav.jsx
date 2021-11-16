import './nav.css'
import { FaBars, FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa'
import flag_es from './es.svg'
import flag_uk from './gb.svg'


export default function NavBar() {

  return (
    <nav className='topNavBar'>
      <div className='contact'>
        <FaGithub />
        <FaLinkedin />
        <FaRegEnvelope />
      </div>
      <FaBars />
    </nav>
  )
}

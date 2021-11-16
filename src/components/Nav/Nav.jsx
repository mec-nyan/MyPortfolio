import './nav.css'
import { FaBars, FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa'


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

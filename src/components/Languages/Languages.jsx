import './languages.css'
import flag_es from './es.svg'
import flag_en from './gb.svg'
import flag_jp from './jp.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export default function Languages() {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <div className='langContainer'>
      <div className='frame'>
        <h2>Languages</h2>
        <div className='languageCards'>

          <div className='spanish langCard' data-aos='fade-up'>
            <div className='cardTop'>
              <h3>Spanish</h3>
              <div className='underline'></div>
              <img className='flag' src={flag_es} alt='es' />
            </div>
            <div className='cardBottom'>
              <h2>Native</h2>
              <p>Spanish is my<br />first language</p>
              <div className='underline'></div>
            </div>
          </div>

          <div className='english langCard' data-aos='fade-up'>
            <div className='cardTop'>
              <h3>English</h3>
              <div className='underline'></div>
              <img className='flag' src={flag_en} alt='en' />
            </div>
            <div className='cardBottom'>
              <h2>C2</h2>
              <p>Proficient</p>
              <div className='underline'></div>
              <p>Certified</p>
            </div>
          </div>

          <div className='japanese langCard' data-aos='fade-up'>
            <div className='cardTop'>
              <h3>Japanese</h3>
              <div className='underline'></div>
              <img className='flag' src={flag_jp} alt='jp' />
            </div>
            <div className='cardBottom'>
              <h2>A1</h2>
              <p>Beginner</p>
              <div className='underline'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

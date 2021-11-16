import './education.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export default function Education() {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])


  return (
    <div className='educationContainer'>
      <div className='education'>
        <h2 data-aos='fade-left'>Education</h2>
        <div className='edUnderline' data-aos='fade-right'></div>

        <div className='bootcamp'>
          <div className='bootcampTop'>
            <h3>Full Stack Developer</h3>
            <div className='underlineBootcamp'></div>
          </div>
          <div className='bootcampBottom'>
            <h4>HENRY</h4>
            <p>Intensive bootcamp<br />with over 800 coding hours</p>
            <p>Graduated on Nov. 2021</p>
          </div>
        </div>

      </div>
    </div>
  )
}

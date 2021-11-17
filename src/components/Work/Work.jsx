import './work.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export default function Work() {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <div className='workContainer'>
      <div className='workCardTop'>
        <span data-aos='flip-left' className='title'>
          Work Experience
        </span>
        <div className='workContent'>
          <h3>Full Stack Teaching Assistant</h3>
          <h4><strong>HENRY</strong> - Apprenticeship</h4>
          <p>September 2021 - Present (3 mos)</p>
          <p>Argentina</p>
        </div>
      </div>
      <div className='workCardBottom'>
        <div className='workContent'>
          <div className='workGroup'>
            <h4>Job description:</h4>
            <h5>Bootcamp Assistant (TA) for Full-Stack Development Students</h5>
            <ul>
              <li>Coordinate a group of students to achieve integration to the study group.</li>
              <li>Guide students in the first steps of the course</li>
              <li>Assist to solve exercises and promote group collaboration (Pair Programming)</li>
              <li>Propose ideas to improve the Bootcamp processes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

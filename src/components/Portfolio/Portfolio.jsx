import './portfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export default function Portfolio({ image, description, flipped }) {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <div className={'pfContainer' + (flipped ? ' flipped' : '')}>

      <div className='imgContainer'>
        <div className='bgImg'></div>
        <img src={image} alt='Mec Games' />
      </div>

      <div className='projectDescription'>
        {description}
      </div>

    </div>
  )
}

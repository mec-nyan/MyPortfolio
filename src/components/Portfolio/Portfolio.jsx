import './portfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FiExternalLink } from 'react-icons/fi'


export default function Portfolio({ image, description, extUrl, flipped }) {
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
        {extUrl ? <a href={extUrl} rel='noreferrer' target='_blank'>Visit <FiExternalLink /></a> : null}
      </div>

      <div className='projectDescription'>
        {description}
      </div>

    </div>
  )
}

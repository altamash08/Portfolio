import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Animate from '../Animate/Animate'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['','A','l', 't', 'a', 'm', 'a', 's', 'h']
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    ' ',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 8000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img
              src={LogoTitle}
              alt="Full-Stack Developer"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={18}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>Full Stack Developer / Graphic Designer</h2>
          <Link to="/projects" className="flat-button">
            Projects
          </Link>
         <div className="resume">
  <a
    href="/cv.pdf"
    download
    className="flat-button"
  >
    Download CV
  </a>
</div>
        </div>
        
       
      </div>
<div className="a-animation">
    <Animate />
  </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home

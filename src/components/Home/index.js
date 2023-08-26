import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import e from '../../assets/images/e (1).png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'
import me2 from "../../assets/images/IMG_7306.JPG"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['m', 'm', 'a', 'n', 'u', 'e', 'l']
  const jobArray = [
    'w',
    'e',
    'b',
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
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={e} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <div className='img-container'>
          <img src={me2} alt="" />
        </div>
        <h2>Frontend Developer / Backend Developer with Nodejs </h2>
        <Link to="contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo/>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home

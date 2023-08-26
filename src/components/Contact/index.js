import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_xjewcto',
        'template_vcjtq3r',
        refForm.current,
        '4AjVG5tg_MzY9G4RJ'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
            Emmanuel Onuabuguchi
            <br />
            Nigeria
            <br />
            7/12 Rumens road ikoyi
            <br />
            Lagos
            <span>emmanuellawson47@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[32.3460, 5.4756]} zoom={13}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                <Marker position={[32.3460, 5.4756]}>
                    <Popup>Emmanuel Frequents here, come over for a cup of coffee 😊</Popup>
                </Marker>
            </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

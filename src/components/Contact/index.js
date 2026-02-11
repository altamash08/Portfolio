import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import DrawA from "../DrawA/DrawA";

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_thhly1v',      
        'template_99vem9a',     
        form.current,
        '0HAOY2VPKcL69AX-b'     
      )
      .then(() => {
        alert('Message sent successfully!')
        form.current.reset()
      })
      .catch(() => {
        alert('Failed to send message. Try again.')
      })
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>

          <p>
            I’m a Full-Stack Developer and Graphic Designer focused on building
            modern web applications and clean UI designs. Feel free to contact me
            using the form below.
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
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
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>

                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  />
                </li>

                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className="container contact-page">
  <div className="text-zone">
    {/* your content */}
  </div>

  <div className="a-animation">
    <DrawA />
  </div>
</div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact

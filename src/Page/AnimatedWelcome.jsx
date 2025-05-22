import { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '/VoltageName.png'
import "../assets/css/AnimatedWelcome.css"
import { motion } from 'framer-motion'
import Particles from '@tsparticles/react'
import { loadLinksPreset } from '@tsparticles/preset-links'

function AnimatedWelcome() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home')
    }, 4000)
    return () => clearTimeout(timer)
  }, [navigate])

  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine)
  }, [])

  return (
    <div className="splash-container">
      <Particles
        id="tsparticles"
        className="particles"
        init={particlesInit}
        options={{
          preset: 'links',
          background: {
            color: { value: "#1c1b1b" }
          },
          particles: {
            color: { value: "#00ffcc" }, // tipo neón
            links: {
              color: "#00ffcc",
              distance: 120,
              enable: true,
              opacity: 0.4,
              width: 1
            }
          },
          fullScreen: { enable: false }
        }}
      />
      <motion.img
        src={logo}
        alt="Logo"
        className="splash-logo"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />
    </div>
  )
}

export default AnimatedWelcome

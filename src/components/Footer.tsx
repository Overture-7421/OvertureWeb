import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 py-12 px-6 border-t"
      style={{ borderColor: 'rgba(107, 53, 170, 0.3)' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-4" style={{ color: '#E0E0FF' }}>
          © 2025 FRC Team Overture 7421. Building the future, one robot at a time.
        </p>
        <p className="text-sm" style={{ color: '#00FFFF' }}>
          "More Than Robots" - FIRST Robotics Competition
        </p>
      </div>
    </motion.footer>
  )
}

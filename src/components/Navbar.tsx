import { Button, Image } from '@nextui-org/react'
import { motion } from 'framer-motion'

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-20 p-6"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto backdrop-blur-md bg-black/10 rounded-2xl p-6 border border-white/10">
        <div className="flex items-center space-x-4">
          <Image
            src="/Media/Images/SAMPLE PFP.jpg"
            alt="Team Overture Logo"
            width={60}
            height={60}
            className="rounded-full border-2 shadow-lg"
            style={{ borderColor: '#00FFFF', boxShadow: '0 10px 15px -3px rgba(0, 255, 255, 0.5)' }}
          />
          <div>
            <h1 className="text-2xl font-bold" style={{ color: '#00FFFF' }}>OVERTURE</h1>
            <p className="text-sm" style={{ color: '#E0E0FF' }}>Team 7421</p>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <Button 
            variant="ghost" 
            className="border"
            style={{ color: '#E0E0FF', borderColor: '#00FFFF' }}
          >
            About
          </Button>
          <Button 
            variant="ghost"
            className="border"
            style={{ color: '#E0E0FF', borderColor: '#00FFFF' }}
          >
            Programs
          </Button>
          <Button 
            className="text-white shadow-lg"
            style={{ backgroundColor: '#FF00FF', boxShadow: '0 10px 15px -3px rgba(255, 0, 255, 0.5)' }}
          >
            Join Us
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}

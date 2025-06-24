import { Button, Card, CardBody, Chip, Divider } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { Navbar, Footer } from './components'
import './App.css'

function App() {
  const teamAchievements = [
    "Regional Champions 2023",
    "Innovation in Control Award",
    "Gracious Professionalism Award",
    "Engineering Inspiration Award"
  ]

  const programs = [
    {
      name: "FLL (FIRST LEGO League)",
      age: "Ages 9-14",
      description: "Students research real-world problems and build autonomous robots using LEGO MINDSTORMS.",
      color: "overture-cyan"
    },
    {
      name: "FTC (FIRST Tech Challenge)",
      age: "Ages 12-18", 
      description: "Teams design, build, and program robots to compete in an alliance format.",
      color: "overture-magenta"
    },
    {
      name: "FRC (FIRST Robotics Competition)",
      age: "Ages 14-18",
      description: "The ultimate Sport for the Mind combining technology, strategy, and excitement.",
      color: "overture-cyan"
    }
  ]

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0A2A 0%, #1A004D 100%)' }}>
      {/* Background Video Placeholder */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-60" style={{ background: 'linear-gradient(135deg, #0A0A2A 0%, #1A004D 100%)' }}></div>
        {/* Animated background pattern to simulate video */}
        <div className="w-full h-full relative overflow-hidden">
          <div 
            className="absolute inset-0 animate-pulse opacity-30"
            style={{ 
              background: 'radial-gradient(circle at 20% 80%, #6B35AA 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FF00FF 0%, transparent 50%), radial-gradient(circle at 40% 40%, #00FFFF 0%, transparent 50%), linear-gradient(135deg, #0A0A2A 0%, #1A004D 100%)'
            }}
          ></div>
          <div 
            className="absolute inset-0 animate-ping opacity-20"
            style={{ 
              background: 'radial-gradient(circle at 60% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
              animationDuration: '4s'
            }}
          ></div>
        </div>
        {/* Additional blur overlay for better text readability */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 flex items-center justify-center min-h-[80vh] px-6"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8 backdrop-blur-md bg-black/20 rounded-3xl p-8 border border-white/10"
          >
            <h1 
              className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text mb-4"
              style={{ backgroundImage: 'linear-gradient(to right, #00FFFF, #FF00FF)' }}
            >
              OVERTURE
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: '#00FFFF' }}>
              FRC Team 7421
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: '#E0E0FF' }}>
              Inspiring innovation, building the future, and changing the world through robotics.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 backdrop-blur-sm bg-black/10 rounded-2xl p-6 border border-white/5"
          >
            <Button 
              size="lg"
              className="text-white px-8 py-4 text-lg shadow-2xl border"
              style={{ 
                backgroundColor: '#FF00FF', 
                borderColor: '#FF00FF',
                boxShadow: '0 25px 25px -5px rgba(255, 0, 255, 0.5)'
              }}
            >
              Meet Our Robot
            </Button>
            <Button 
              size="lg"
              variant="bordered"
              className="px-8 py-4 text-lg shadow-xl"
              style={{ 
                borderColor: '#00FFFF', 
                color: '#00FFFF',
                boxShadow: '0 20px 25px -5px rgba(0, 255, 255, 0.3)'
              }}
            >
              Our Journey
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-3 backdrop-blur-sm bg-black/10 rounded-2xl p-6 border border-white/5"
          >
            {teamAchievements.map((achievement, index) => (
              <Chip
                key={index}
                variant="bordered"
                className="backdrop-blur-sm"
                style={{ 
                  borderColor: '#6B35AA',
                  color: '#E0E0FF',
                  backgroundColor: 'rgba(10, 10, 42, 0.5)'
                }}
              >
                {achievement}
              </Chip>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About FIRST Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: '#00FFFF' }}
          >
            About FIRST Robotics
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Card 
                className="backdrop-blur-lg border shadow-2xl"
                style={{ 
                  backgroundColor: 'rgba(10, 10, 42, 0.9)',
                  borderColor: 'rgba(107, 53, 170, 0.5)',
                  boxShadow: '0 25px 25px -5px rgba(255, 0, 255, 0.3)'
                }}
              >
                <CardBody className="p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#00FFFF' }}>
                    What is FIRST?
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#E0E0FF' }}>
                    FIRST (For Inspiration and Recognition of Science and Technology) is a global robotics community preparing young people for the future through team-based robotics programs for ages 4-18.
                  </p>
                  <Divider className="my-6" style={{ backgroundColor: 'rgba(107, 53, 170, 0.5)' }} />
                  <p className="leading-relaxed" style={{ color: '#E0E0FF' }}>
                    Founded by Dean Kamen in 1989, FIRST has grown to impact over 679,000 students annually across more than 110 countries, fostering STEM learning, teamwork, and gracious professionalism.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {programs.map((program, index) => (
                <Card 
                  key={index} 
                  className="backdrop-blur-lg border transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(26, 0, 77, 0.8)',
                    borderColor: 'rgba(0, 255, 255, 0.4)'
                  }}
                >
                  <CardBody className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-white">{program.name}</h4>
                      <Chip 
                        size="sm" 
                        variant="bordered"
                        style={{
                          backgroundColor: program.color === 'overture-cyan' ? 'rgba(0, 255, 255, 0.2)' : 'rgba(255, 0, 255, 0.2)',
                          color: program.color === 'overture-cyan' ? '#00FFFF' : '#FF00FF',
                          borderColor: program.color === 'overture-cyan' ? 'rgba(0, 255, 255, 0.5)' : 'rgba(255, 0, 255, 0.5)'
                        }}
                      >
                        {program.age}
                      </Chip>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#E0E0FF' }}>
                      {program.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* Team Overture Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card 
              className="backdrop-blur-lg border shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 10, 42, 0.95) 0%, rgba(26, 0, 77, 0.95) 100%)',
                borderColor: 'rgba(107, 53, 170, 0.6)',
                boxShadow: '0 25px 25px -5px rgba(0, 255, 255, 0.3)'
              }}
            >
              <CardBody className="p-12">
                <h3 
                  className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text mb-6"
                  style={{ backgroundImage: 'linear-gradient(to right, #00FFFF, #FF00FF)' }}
                >
                  Team Overture 7421
                </h3>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8" style={{ color: '#E0E0FF' }}>
                  We are a passionate FRC team dedicated to pushing the boundaries of robotics and engineering. 
                  Our journey spans across all FIRST programs - from mentoring FLL teams to competing at the highest 
                  level in FRC competitions. We believe in building not just robots, but building character, 
                  community, and the next generation of innovators.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="font-semibold shadow-lg"
                    style={{
                      backgroundColor: '#00FFFF',
                      color: '#0A0A2A',
                      boxShadow: '0 10px 15px -3px rgba(0, 255, 255, 0.5)'
                    }}
                  >
                    Learn More About Us
                  </Button>
                  <Button 
                    variant="bordered"
                    style={{
                      borderColor: '#FF00FF',
                      color: '#FF00FF'
                    }}
                  >
                    View Our Robots
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Chip,
  Image
} from '@nextui-org/react'
import { FaRobot, FaCog, FaUsers, FaTrophy, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'
import { GiRobotGrab } from 'react-icons/gi'
import { MdScience, MdEmojiEvents } from 'react-icons/md'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-team-bg">
      {/* Navbar */}
      <Navbar 
        className="bg-navbar-gradient border-b-2 border-glow-magenta shadow-lg"
        height="70px"
        maxWidth="full"
      >
        <NavbarBrand>
          <GiRobotGrab className="text-primary-magenta text-3xl mr-2" />
          <p className="font-bold text-xl text-white">Team Overture</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="text-white hover:text-secondary-cyan transition-colors" href="#about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white hover:text-secondary-cyan transition-colors" href="#programs">
              Programs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white hover:text-secondary-cyan transition-colors" href="#achievements">
              Achievements
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white hover:text-secondary-cyan transition-colors" href="#contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button 
              as={Link} 
              className="bg-primary-magenta text-white font-semibold hover:bg-opacity-80 shadow-lg"
              href="#join"
              variant="flat"
            >
              Join Us
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-cyan-100/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Chip 
              className="bg-border-glow text-white font-semibold mb-4"
              size="lg"
              variant="shadow"
            >
              🤖 FIRST Robotics Team
            </Chip>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6">
            Team <span className="text-primary-magenta">Overture</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Inspiring young minds through robotics, innovation, and collaboration across 
            <span className="text-secondary-cyan font-semibold"> FLL</span>, 
            <span className="text-primary-magenta font-semibold"> FTC</span>, and 
            <span className="text-border-purple font-semibold"> FRC</span> programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary-magenta text-white font-semibold text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              size="lg"
              startContent={<FaRobot />}
            >
              Explore Our Robots
            </Button>
            <Button 
              className="bg-secondary-cyan text-gray-800 font-semibold text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              size="lg"
              startContent={<FaUsers />}
            >
              Meet the Team
            </Button>
          </div>
        </div>
      </section>

      {/* About FIRST Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-primary-magenta">FIRST</span> Robotics
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FIRST (For Inspiration and Recognition of Science and Technology) is a global organization 
              that prepares young people for the future through team-based robotics programs.
            </p>
          </div>
          
          <Card className="bg-white shadow-xl border-2 border-transparent hover:border-glow-magenta transition-all duration-300">
            <CardBody className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-6">
                    To inspire young people to be science and technology leaders and innovators by engaging them 
                    in exciting mentor-based programs that build science, engineering, and technology skills, 
                    inspire innovation, and foster well-rounded life capabilities including self-confidence, 
                    communication, and leadership.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Chip className="bg-primary-magenta text-white">Innovation</Chip>
                    <Chip className="bg-secondary-cyan text-gray-800">Leadership</Chip>
                    <Chip className="bg-border-purple text-white">Collaboration</Chip>
                    <Chip className="bg-navbar-dark text-white">Excellence</Chip>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-border-glow rounded-full blur opacity-75"></div>
                    <div className="relative bg-white rounded-full p-8 shadow-2xl">
                      <FaCog className="text-8xl text-primary-magenta animate-spin" style={{animationDuration: '8s'}} />
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 px-4 bg-gradient-to-r from-purple-50/30 to-cyan-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600">Three levels of robotics excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* FLL Card */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-secondary-cyan">
              <CardHeader className="pb-0 pt-6 px-6 flex-col items-start">
                <div className="flex items-center gap-3 mb-2">
                  <MdScience className="text-3xl text-secondary-cyan" />
                  <h3 className="text-2xl font-bold text-gray-800">FLL</h3>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Ages 9-14</p>
              </CardHeader>
              <CardBody className="px-6 py-4">
                <h4 className="font-bold text-lg mb-2">FIRST LEGO League</h4>
                <p className="text-gray-600 mb-4">
                  Introduces STEM concepts through hands-on robotics activities, building and programming 
                  LEGO robots to complete missions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary-cyan rounded-full"></div>
                    <span className="text-sm">LEGO-based robots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary-cyan rounded-full"></div>
                    <span className="text-sm">Problem-solving challenges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary-cyan rounded-full"></div>
                    <span className="text-sm">Teamwork & research</span>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* FTC Card */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary-magenta">
              <CardHeader className="pb-0 pt-6 px-6 flex-col items-start">
                <div className="flex items-center gap-3 mb-2">
                  <FaRobot className="text-3xl text-primary-magenta" />
                  <h3 className="text-2xl font-bold text-gray-800">FTC</h3>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Ages 12-18</p>
              </CardHeader>
              <CardBody className="px-6 py-4">
                <h4 className="font-bold text-lg mb-2">FIRST Tech Challenge</h4>
                <p className="text-gray-600 mb-4">
                  Students design, build, and program robots to compete in an alliance format 
                  against other teams in exciting challenges.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-magenta rounded-full"></div>
                    <span className="text-sm">Advanced robotics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-magenta rounded-full"></div>
                    <span className="text-sm">Java/Blocks programming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-magenta rounded-full"></div>
                    <span className="text-sm">Engineering notebook</span>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* FRC Card */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-border-purple">
              <CardHeader className="pb-0 pt-6 px-6 flex-col items-start">
                <div className="flex items-center gap-3 mb-2">
                  <FaTrophy className="text-3xl text-border-purple" />
                  <h3 className="text-2xl font-bold text-gray-800">FRC</h3>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Ages 14-18</p>
              </CardHeader>
              <CardBody className="px-6 py-4">
                <h4 className="font-bold text-lg mb-2">FIRST Robotics Competition</h4>
                <p className="text-gray-600 mb-4">
                  The ultimate sport for the mind! Teams build large-scale robots to compete 
                  in thrilling matches combining strategy, skill, and science.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-border-purple rounded-full"></div>
                    <span className="text-sm">120+ pound robots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-border-purple rounded-full"></div>
                    <span className="text-sm">6-week build season</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-border-purple rounded-full"></div>
                    <span className="text-sm">Regional competitions</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600">Celebrating our journey of excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-primary-magenta to-purple-600 text-white shadow-xl">
              <CardBody className="text-center p-6">
                <MdEmojiEvents className="text-4xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold">15+</h3>
                <p className="text-sm opacity-90">Awards Won</p>
              </CardBody>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary-cyan to-blue-500 text-white shadow-xl">
              <CardBody className="text-center p-6">
                <FaUsers className="text-4xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold">50+</h3>
                <p className="text-sm opacity-90">Team Members</p>
              </CardBody>
            </Card>
            
            <Card className="bg-gradient-to-br from-border-purple to-purple-800 text-white shadow-xl">
              <CardBody className="text-center p-6">
                <FaRobot className="text-4xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold">25+</h3>
                <p className="text-sm opacity-90">Robots Built</p>
              </CardBody>
            </Card>
            
            <Card className="bg-gradient-to-br from-navbar-dark to-navbar-purple text-white shadow-xl">
              <CardBody className="text-center p-6">
                <FaTrophy className="text-4xl mx-auto mb-2" />
                <h3 className="text-2xl font-bold">5</h3>
                <p className="text-sm opacity-90">Years Active</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="join" className="py-16 px-4 bg-gradient-to-r from-purple-100/50 to-cyan-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Join the Revolution?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of something bigger. Learn, build, compete, and make lifelong friendships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary-magenta text-white font-semibold text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              size="lg"
            >
              Apply Now
            </Button>
            <Button 
              className="bg-secondary-cyan text-gray-800 font-semibold text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navbar-gradient text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GiRobotGrab className="text-primary-magenta text-2xl" />
                <h3 className="text-xl font-bold">Team Overture</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Inspiring the next generation of innovators through robotics and STEM education.
              </p>
              <div className="flex gap-4">
                <Link className="text-primary-magenta hover:text-secondary-cyan transition-colors">
                  <FaGithub className="text-2xl" />
                </Link>
                <Link className="text-primary-magenta hover:text-secondary-cyan transition-colors">
                  <FaInstagram className="text-2xl" />
                </Link>
                <Link className="text-primary-magenta hover:text-secondary-cyan transition-colors">
                  <FaYoutube className="text-2xl" />
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <div className="space-y-2">
                <Link className="block text-gray-300 hover:text-secondary-cyan transition-colors">
                  FIRST LEGO League (FLL)
                </Link>
                <Link className="block text-gray-300 hover:text-secondary-cyan transition-colors">
                  FIRST Tech Challenge (FTC)
                </Link>
                <Link className="block text-gray-300 hover:text-secondary-cyan transition-colors">
                  FIRST Robotics Competition (FRC)
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
              <div className="space-y-2">
                <Link className="block text-gray-300 hover:text-secondary-cyan transition-colors">
                  Join the Team
                </Link>
                <Link className="block text-gray-300 hover:text-secondary-cyan transition-colors">
                  Mentor Program
                </Link>
                <Link className="block text-gray-300 hover:text-secondary-cyan transition-colors">
                  Sponsorship
                </Link>
                <Link className="block text-gray-300 hover:text-secondary-cyan transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          <Divider className="my-8 bg-gray-600" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Team Overture. All rights reserved. Proudly part of the FIRST Robotics family.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import Image from 'next/image'
import Navigation from './components/Navigation'
import WhoAmI from './components/WhoAmI'
import TechStack from './components/TechStack'
import Profile from './components/Profile'
import Education from './components/Education'
import Quote from './components/Quote'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white p-4">
      <Navigation />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <WhoAmI />
        <div className="relative h-[300px]">
          <Image
            src="/night-sky.jpg"
            alt="Night sky"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-[#1E3A4C] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white">
              Student & Full Stack Developer
            </h2>
          </div>
          <TechStack />
        </div>
        <div className="flex flex-col gap-4">
          <Profile />
          <Quote />
        </div>
        <Education />
      </div>
    </main>
  )
}

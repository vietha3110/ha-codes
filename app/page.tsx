import About from '@/components/About'
import Contact from '@/components/Contact'
import Home from '@/components/Home'
import NavBar from '@/components/NavBar'
import Portfolio from '@/components/Portfolio'
import SocialLinks from '@/components/SocialLink'
import Recommendation from '@/components/Recommendation'

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar/>
      <Home />
      <About/>
      <Portfolio/>
      <SocialLinks />
      <Recommendation/>
      <Contact/>
    </main>
  )
}

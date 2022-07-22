import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { CallToActionSection } from '../components/Home/CallToActionSection'
import { ContactInfo } from '../components/Home/ContactInfo'
import { ShopSection } from '../components/Home/ShopSection'

export const Home = () => {
  window.scrollTo(0, 0)
  return (
    <div className=''>
      <Header />
      <ShopSection />
      <CallToActionSection />
      <ContactInfo />
      <Footer />
    </div>
  )
}

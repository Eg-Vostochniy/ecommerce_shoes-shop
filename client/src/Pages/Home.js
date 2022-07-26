import { Footer } from '../components/Footer'
import { CallToActionSection } from '../components/Home/CallToActionSection'
import { ContactInfo } from '../components/Home/ContactInfo'
import { ShopSection } from '../components/Home/ShopSection'

export const Home = () => {
  window.scrollTo(0, 0)
  return (
    <div className=''>
      <ShopSection />
      <CallToActionSection />
      <ContactInfo />
      <Footer />
    </div>
  )
}

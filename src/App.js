import { Hero } from './components/Hero'
import { Content } from './components/Content/Content';
import { Services } from './components/Services/Services';
import { Instructor } from './components/Instructor';
import { Start } from './components/Start'
import { PracticeRoom } from './components/PracticeRoom'
import { FAQ } from './components/FAQ/FAQ'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Prices } from './components/Prices/Prices'
import { Contact } from './components/Contact'
import { WhatsAppButton } from './components/WhatsappButton';

function App() {
  return (
    <main className='"pt-8 md:p-0'>
      <Hero />
      
      <Content />

      <Instructor />

      <Services />

      <Start />

      <PracticeRoom />

      <FAQ />

      <Testimonials />
      
      <Prices />
      
      <Contact />

      <WhatsAppButton />
    </main>
  )
}

export default App;
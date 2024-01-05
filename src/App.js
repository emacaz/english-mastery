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

function App() {
  return (
    <main className='h-screen px-20 py-8'>
      <Hero />
      
      {/* <Content /><hr/>

      <Instructor /><hr/>

      <Services /><hr/>

      <Start /><hr/>

      <PracticeRoom /><hr/>

      <FAQ /><hr/>

      <Testimonials /><hr/>
      
      <Prices /><hr/>
      
      <Contact /><hr/> */}
    </main>
  )
}

export default App;
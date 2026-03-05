import Hero from '../sections/Hero'
import SectionDivider from '../components/SectionDivider'
import PainPoints from '../sections/PainPoints'
import CoreData from '../sections/CoreData'
import Product from '../sections/Product'
import HowItWorks from '../sections/HowItWorks'
import Comparison from '../sections/Comparison'
import Team from '../sections/Team'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <PainPoints />
      <SectionDivider />
      <CoreData />
      <SectionDivider />
      <Product />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <Comparison />
      <SectionDivider />
      <Team />
      <SectionDivider />
      <Contact />
    </main>
  )
}

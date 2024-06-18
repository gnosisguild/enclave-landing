import Content from './Content'
import ButterflyAnimation from '@/components/ButterflyAnimation'

const Landing = () => {
  return (
    <main className='-z-1 flex h-full w-full flex-grow flex-col'>
      <ButterflyAnimation />
      <Content />
    </main>
  )
}

export default Landing

import Content from './Content'
import ButterflyAnimation from '@/components/ButterflyAnimation'

const Landing = () => {
  return (
    <main className='flex h-full w-full flex-grow flex-col'>
      <ButterflyAnimation />
      <Content />
    </main>
  )
}

export default Landing

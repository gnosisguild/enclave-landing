import { Link } from 'react-router-dom'
import AnimatedText from './AnimatedText'

const Content = () => {
  const links = [
    {
      name: 'white paper',
      url: '#',
    },
    {
      name: 'seed memo',
      url: '#',
    },
    {
      name: 'hiring',
      url: '#',
    },
  ]

  return (
    <div className='flex min-h-screen w-full items-center justify-center px-6'>
      <div className='relative mx-auto w-full max-w-screen-md'>
        <div className='space-y-16'>
          <div className='space-y-1'>
            <div className='font-display text-7xl leading-none tracking-tight text-green-100 md:text-8xl'>enclave.</div>
            <div className='font-mono text-lg font-medium leading-none text-green-300 md:text-2xl md:tracking-wide'>
              <AnimatedText text='encrypted execution environments' />
            </div>
          </div>
          <div className='flex max-w-lg items-center gap-4 max-md:flex-wrap'>
            <input type='text' className='input' placeholder='enter your email' />
            <button className='btn btn--primary max-md:w-full'>Subscribe</button>
          </div>
          <ul className='space-y-4'>
            {links.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  <Link
                    to={url}
                    className='inline-flex cursor-pointer items-center space-x-3 font-mono text-xl underline decoration-green-700 decoration-2 underline-offset-2 duration-300 ease-in-out hover:text-white hover:decoration-gold-500 hover:underline-offset-4'
                  >
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Content

import { Link } from 'react-router-dom'
import AnimatedText from '@/components/AnimatedText'
import { menuItems } from '@/constants/menuItems'

const Content = () => {
  return (
    <div className='flex w-full flex-grow flex-col items-center justify-center px-6'>
      <div className='relative mx-auto w-full max-w-screen-md'>
        <div className='space-y-16'>
          <div className='space-y-1'>
            <h1 className='font-display text-4xl leading-none tracking-tight'>enclave</h1>
            <div className='font-mono font-medium leading-none text-gray-600 md:tracking-wide'>
              <AnimatedText text='encrypted execution environments (e3)' />
            </div>
          </div>
          <div className='flex max-w-lg items-center gap-4 max-md:flex-wrap'>
            <input className='input' type='text' placeholder='enter your email' />
            <button className='btn btn--noCSS font-mono max-md:w-full'>Subscribe</button>
          </div>
          <ul className='space-y-4'>
            {menuItems.map(({ name, url }, i) => {
              const external = url.includes('http')
              return (
                <li key={i}>
                  <Link
                    target={external ? '_blank' : undefined}
                    rel={external ? 'redirect' : undefined}
                    to={url}
                    className='inline-flex cursor-pointer items-center space-x-3 font-mono text-sm underline decoration-gray-700 decoration-2 underline-offset-2 duration-300 ease-in-out hover:text-gray-500 hover:decoration-gold-500 hover:underline-offset-4'
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

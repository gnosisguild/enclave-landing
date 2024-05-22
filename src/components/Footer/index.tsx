import { Link } from 'react-router-dom'
import { socialLinks } from '@/constants/socialLinks'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='flex w-full justify-center px-6'>
      <div className='mx-auto w-full max-w-screen-xl border-t-2 border-gray-300/50 py-8'>
        <div className='flex items-center justify-between gap-6 max-sm:flex-col sm:gap-4'>
          <div className='flex flex-wrap items-center gap-6 sm:gap-4'>
            <div className='max-sm:w-full max-sm:space-y-2 sm:flex sm:space-x-2'>
              <div className='text-center font-mono text-xs text-gray-700 max-sm:w-full'>{year} © Enclave</div>
              <div className='font-mono text-xs text-gray-400 max-sm:hidden'>|</div>
              <div className='text-center font-mono text-xs text-gray-700 max-sm:w-full'>
                Created by{' '}
                <Link
                  to='https://www.gnosisguild.org/'
                  target='_blank'
                  rel='noredirect'
                  className='cursor-pointer text-gray-900 underline decoration-gray-700 decoration-2 duration-300 hover:text-gray-500 hover:decoration-gold-500 hover:underline-offset-2'
                >
                  Gnosis Guild
                </Link>
              </div>
            </div>
          </div>
          <ul className='flex space-x-2 sm:space-x-4'>
            {socialLinks.map(({ name, icon, url }, i) => {
              return (
                <li key={i} className='cursor-pointer rounded-full p-1 text-gray-500 duration-300 ease-in-out hover:text-gold-500 sm:p-2'>
                  <Link to={url} id={name}>
                    {icon}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

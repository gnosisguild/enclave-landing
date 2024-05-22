import Logo from '../Logo'
import { Link } from 'react-router-dom'
import { menuItems } from '@/constants/menuItems'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='flex w-full justify-center px-6'>
      <div className='mx-auto w-full max-w-screen-xl border-t-2 border-green-900/50 py-8'>
        <div className='flex items-center justify-between gap-3 max-md:flex-col'>
          <div className='flex items-center space-x-2 md:space-x-4'>
            <Link to='/' className='text-green-300 duration-300 ease-in-out hover:text-white'>
              <Logo className='!w-6' wordmark={false} />
            </Link>
            <div className='font-mono text-xs text-green-400'>{year} © Enclave</div>
            <div className='font-mono text-xs text-green-700'>|</div>
            <div className='font-mono text-xs text-green-400'>
              Created by{' '}
              <Link
                to='https://www.gnosisguild.org/'
                target='_blank'
                rel='noredirect'
                className='cursor-pointer text-green-300 underline decoration-green-700 decoration-2 duration-300 hover:text-white hover:decoration-gold-500 hover:underline-offset-2'
              >
                Gnosis Guild
              </Link>
            </div>
          </div>
          <ul className='flex space-x-4'>
            {menuItems.map(({ name, icon, url }, i) => {
              return (
                <Link key={i} to={url} id={name}>
                  <div className='hover:bg-green-1000 cursor-pointer rounded-full p-2 text-green-300 duration-300 ease-in-out hover:text-gold-500'>
                    {icon}
                  </div>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

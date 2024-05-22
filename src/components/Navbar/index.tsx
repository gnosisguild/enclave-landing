import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'
import { socialLinks } from '@/constants/socialLinks'
import { menuItems } from '@/constants/menuItems'
import useWindowSize from '@/hooks/useWindowSize'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
  let { isDesktop } = useWindowSize()

  return (
    <header className='fixed z-10 flex w-full justify-center border-b-2 border-gray-300/50 bg-white p-6'>
      <div className='mx-auto w-full max-w-screen-xl'>
        <nav className='flex items-center justify-between'>
          <Link to='/' className='text-gray-700 duration-500 ease-in-out hover:text-gold-500'>
            <Logo />
          </Link>
          <div className='flex items-center gap-8'>
            {isDesktop && (
              <>
                <ul className='mr-2 flex space-x-8'>
                  {menuItems.map(({ name, url }, i) => {
                    return (
                      <li key={i}>
                        <Link
                          to={url}
                          className='inline-flex cursor-pointer items-center font-mono text-sm text-gray-700 underline decoration-transparent decoration-2 underline-offset-2 duration-300 ease-in-out hover:text-gray-500 hover:decoration-gold-500 hover:underline-offset-4'
                        >
                          {name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <div className='h-6 w-px bg-gray-300' />
              </>
            )}
            <div className='flex items-center space-x-4 md:space-x-8'>
              <ul className='flex items-center space-x-2 md:space-x-4'>
                {socialLinks.map(({ name, icon, url }, i) => {
                  return (
                    <li
                      key={i}
                      className='cursor-pointer rounded-full p-1 text-gray-500 duration-300 ease-in-out hover:text-gold-500 sm:p-2'
                    >
                      <Link to={url} id={name}>
                        {icon}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              {!isDesktop && (
                <>
                  <div className='h-6 w-px bg-gray-800' />
                  <HamburgerMenu />
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

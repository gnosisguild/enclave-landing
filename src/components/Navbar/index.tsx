import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'
import { menuItems } from '@/constants/menuItems'

const Navbar = () => {
  return (
    <div className='z-2 fixed flex w-full justify-center border-b-2 border-green-900/50 bg-green-950/20 p-6 backdrop-blur-xl'>
      <div className='mx-auto w-full max-w-screen-xl'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='text-green-300 duration-500 ease-in-out hover:text-white'>
            <Logo />
          </Link>
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

export default Navbar

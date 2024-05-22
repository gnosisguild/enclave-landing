import { menuItems } from '@/constants/menuItems'
import { List } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className='relative'>
      <button
        className='hover:bg-green-1000 cursor-pointer rounded-full p-2 text-green-300 duration-300 ease-in-out hover:text-gold-500'
        onClick={handleClick}
      >
        <List weight='bold' size={24} className='text-green-300' />
      </button>
      {show && (
        <div className='absolute right-0 translate-y-2 rounded-2xl border-2 border-green-700 bg-green-900 p-6 shadow-2xl'>
          <ul className='space-y-4'>
            {menuItems.map(({ name, url }, i) => {
              return (
                <li key={i} className='block'>
                  <Link
                    to={url}
                    className='inline-flex cursor-pointer items-center whitespace-nowrap font-mono text-lg text-green-100 underline decoration-transparent decoration-2 underline-offset-2 duration-300 ease-in-out hover:text-white hover:decoration-gold-500 hover:underline-offset-4'
                  >
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu

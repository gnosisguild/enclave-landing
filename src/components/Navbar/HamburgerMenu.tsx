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
      <button className='cursor-pointer rounded-full p-2 text-gray-700 duration-300 ease-in-out hover:text-gold-500' onClick={handleClick}>
        <List weight='bold' size={24} className='text-gray-500' />
      </button>
      {show && (
        <div className='absolute right-0 translate-y-2 rounded border-2 border-gray-300 bg-white p-6'>
          <ul className='space-y-4'>
            {menuItems.map(({ name, url }, i) => {
              return (
                <li key={i} className='block'>
                  <Link
                    to={url}
                    className='inline-flex cursor-pointer items-center whitespace-nowrap font-mono text-sm underline decoration-transparent decoration-2 underline-offset-2 duration-300 ease-in-out hover:text-gray-500 hover:decoration-gold-500 hover:underline-offset-4'
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

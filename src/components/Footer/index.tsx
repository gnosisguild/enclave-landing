import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='flex w-full gap-4 p-6'>
      <div className='text-center text-gray-700 max-sm:w-full'>{year} © Enclave</div>
      <div className=' text-gray-400 max-sm:hidden'>|</div>
      <div className='text-center  text-gray-700 max-sm:w-full'>
        Created by{' '}
        <Link to='https://www.gnosisguild.org/' target='_blank' rel='noredirect' className='cursor-pointer text-gray-900 underline'>
          Gnosis Guild
        </Link>
      </div>
      {/* <ul className='flex space-x-2 sm:space-x-4'>
            {socialLinks.map(({ name, icon, url }, i) => {
              return (
                <li key={i} className='cursor-pointer rounded-full p-1 text-gray-500 duration-300 ease-in-out hover:text-gold-500 sm:p-2'>
                  <Link to={url} id={name}>
                    {icon}
                  </Link>
                </li>
              )
            })}
          </ul> */}
    </footer>
  )
}

export default Footer

import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { socialLinks } from '@/constants/socialLinks'

const Footer = () => {
  const year = new Date().getFullYear()
  const signupHolder = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')

    script.setAttribute('data-button-color', '#60C2FF')
    script.setAttribute('data-button-text-color', '#FFFFFF')
    script.setAttribute('data-site', 'https://blog.enclave.gg/')
    script.src = 'https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js'
    script.async = true

    signupHolder.current?.appendChild(script)

    return () => {
      signupHolder.current?.removeChild(script)
    }
  }, [])

  return (
    <footer className='flex w-full flex-col gap-4 p-6 text-base'>

      {/* Signup */}
      <div className='flex flex-col items-center justify-center gap-2 sm:items-start'>
        <div className='text-EnclaveGrey'>Stay up to date with Enclave</div>
        <div
          className='w-full max-w-[400px] scale-75 sm:translate-x-[-13%]'
          ref={signupHolder}
        />
      </div>

      {/* Middle row */}
      <div className='flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:justify-start'>

        {/* Left group */}
        <div className='flex items-center gap-4 sm:justify-start'>
          <div className='text-EnclaveGrey'>{year} © Enclave</div>
          <div className='text-gray-400 max-sm:hidden'>|</div>
          <div className='text-EnclaveGrey'>
            Created by{' '}
            <Link
              to='https://www.gnosisguild.org/'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer text-EnclaveGrey underline'
            >
              Gnosis Guild
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className='text-gray-400 max-sm:hidden'>|</div>

        {/* Email */}
        <div className='text-EnclaveGrey'>
          Email us at{' '}
          <Link
            to='mailto:comms@gnosisguild.org'
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer text-EnclaveGrey underline'
          >
            comms@gnosisguild.org
          </Link>
        </div>

        {/* Divider */}
        <div className='text-gray-400 max-sm:hidden'>|</div>

        {/* Social links */}
        <ul className='flex space-x-2 sm:space-x-4'>
          {socialLinks.map(({ name, icon, url }, i) => (
            <li key={i} className='cursor-pointer p-1 text-EnclaveGrey hover:text-enclaveBlue'>
              <Link to={url} id={name} target='_blank' rel='noopener noreferrer'>
                {icon}
              </Link>
            </li>
          ))}
        </ul>

      </div>

    </footer>
  )
}

export default Footer

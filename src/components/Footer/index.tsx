import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

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
      <div className='flex flex-col items-center justify-center gap-2 sm:items-start'>
        <div className='text-EnclaveGrey'>Stay up to date with Enclave</div>
        <div className='w-full max-w-[400px] scale-75 sm:translate-x-[-13%]' ref={signupHolder} />
      </div>
      <div className='flex w-full justify-between gap-4 sm:justify-start'>
        <div className='text-EnclaveGrey'>{year} © Enclave</div>
        <div className=' text-gray-400 max-sm:hidden'>|</div>
        <div className='text-EnclaveGrey '>
          Created by{' '}
          <Link to='https://www.gnosisguild.org/' target='_blank' rel='noredirect' className='cursor-pointer text-EnclaveGrey underline'>
            Gnosis Guild
          </Link>
        </div>
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

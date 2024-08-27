import { useEffect, useRef } from 'react'

const Content = () => {
  const signupHolder = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const script = document.createElement('script')

    script.setAttribute('data-button-color', '#000000')
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
    <div className='flex flex-col gap-8'>
      <img src='/enclave-logo-solid.svg' alt='Enclave Logo' className='w-40' />
      <div className='flex flex-col gap-2'>
        <p className='text-xl md:text-2xl'>Encrypted execution environments (E3)</p>
        <a href='https://docs.enclave.gg/whitepaper' className='text-lg'>
          Read the whitepaper &#x2197;
        </a>
      </div>
    </div>
  )
}

export default Content

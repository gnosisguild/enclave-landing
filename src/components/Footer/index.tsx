import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full px-6 pb-8 pt-6 md:px-10 lg:px-12'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-6 border-t border-neutral-200 pt-8 text-sm text-neutral-600 md:flex-row md:items-start md:justify-between'>
        <div className='max-w-md'>
          <p className='uppercase tracking-[0.18em] text-neutral-500'>
            Open source protocol. Built by{' '}
            <Link
              to='https://www.gnosisguild.org/'
              target='_blank'
              rel='noopener noreferrer'
              className='transition hover:text-neutral-900'
            >
              Gnosis Guild
            </Link>
            .
          </p>
        </div>

        <div className='flex flex-col gap-2 text-sm uppercase tracking-[0.18em] text-neutral-500 md:items-end'>
          <Link
            to='https://x.com/theinterfold'
            target='_blank'
            rel='noopener noreferrer'
            className='transition hover:text-neutral-900'
          >
            X
          </Link>

          <Link
            to='https://t.me/enclave_e3'
            target='_blank'
            rel='noopener noreferrer'
            className='transition hover:text-neutral-900'
          >
            Telegram
          </Link>

          <Link
            to='https://github.com/theinterfold'
            target='_blank'
            rel='noopener noreferrer'
            className='transition hover:text-neutral-900'
          >
            GitHub
          </Link>

          <Link
            to='mailto:comms@gnosisguild.org'
            target='_blank'
            rel='noopener noreferrer'
            className='transition hover:text-neutral-900'
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

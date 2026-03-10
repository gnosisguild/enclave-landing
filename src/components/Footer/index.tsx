import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-100 px-5 py-10 sm:px-6 md:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-[minmax(0,1fr)_220px] md:items-start">
          <div className="md:pl-10">
            <p className="font-sans text-[12px] uppercase tracking-[0.18em] text-neutral-500">
              Open source protocol. Built by{' '}
              <Link
                to="https://www.gnosisguild.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-neutral-900"
              >
                Gnosis Guild
              </Link>.
            </p>
          </div>

          <div className="flex flex-col gap-1 font-sans text-[12px] uppercase tracking-[0.18em] text-neutral-500 md:items-start">
            <Link to="https://x.com/theinterfold" target="_blank" rel="noopener noreferrer">
              X
            </Link>
            <Link to="https://t.me/enclave_e3" target="_blank" rel="noopener noreferrer">
              Telegram
            </Link>
            <Link to="https://github.com/gnosisguild/enclave" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link to="mailto:comms@gnosisguild.org">
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

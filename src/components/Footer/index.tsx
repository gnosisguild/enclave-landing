import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-50 px-5 pb-8 pt-10 sm:px-6 md:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 text-[11px] text-neutral-600 md:flex-row md:items-start md:justify-between md:text-sm">
        <div className="max-w-[420px] font-sans">
          <p className="uppercase tracking-[0.12em] text-neutral-500 md:tracking-[0.14em]">
            Open source protocol. Built by{' '}
            <Link
              to="https://www.gnosisguild.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-neutral-900"
            >
              Gnosis Guild
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col gap-0.5 font-sans text-[11px] uppercase tracking-[0.12em] text-neutral-500 md:items-end md:gap-1 md:text-sm md:tracking-[0.14em]">
          <Link
            to="https://x.com/theinterfold"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-neutral-900"
          >
            X
          </Link>

          <Link
            to="https://t.me/enclave_e3"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-neutral-900"
          >
            Telegram
          </Link>

          <Link
            to="https://github.com/gnosisguild/enclave"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-neutral-900"
          >
            GitHub
          </Link>

          <Link
            to="mailto:comms@gnosisguild.org"
            className="transition hover:text-neutral-900"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

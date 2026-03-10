import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-100 px-5 py-8 sm:px-6 md:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 text-[12px] text-neutral-600 md:flex-row md:items-start md:justify-between">

        <p className="font-sans uppercase tracking-[0.18em] text-neutral-500">
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

        <div className="flex flex-col gap-1 font-sans uppercase tracking-[0.18em] text-neutral-500 md:items-end">
          <Link to="https://x.com/theinterfold" target="_blank">X</Link>
          <Link to="https://t.me/enclave_e3" target="_blank">Telegram</Link>
          <Link to="https://github.com/gnosisguild/enclave" target="_blank">GitHub</Link>
          <Link to="mailto:comms@gnosisguild.org">Email</Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer

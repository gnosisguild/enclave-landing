export default function Content() {
  const links = [
    { label: 'Read the docs', href: 'https://docs.theinterfold.com/' },
    { label: 'Run a node', href: 'https://www.theinterfold.com/ciphernode' },
    { label: 'Read the blog', href: 'https://blog.theinterfold.com/' },
  ]

  return (
    <main className="min-h-screen bg-[#d9fce8] text-neutral-950 antialiased font-sans">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">

        <img
          src="/interfold-logo.png"
          alt="The Interfold"
          className="w-[170px] md:w-[190px] opacity-90"
        />

        <div className="mt-20 grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,_1fr)_360px]">

          {/* LEFT COLUMN */}

          <div className="max-w-4xl">

            <h1 className="font-display text-balance text-5xl font-bold leading-[0.9] tracking-[-0.08em] md:text-7xl lg:text-[5.5rem]">
              <span className="block">Private Inputs.</span>
              <span className="-ml-[0.02em] block whitespace-nowrap">
                Collective Outcomes.
              </span>
            </h1>

            <p className="mt-14 ml-10 md:ml-24 text-xl italic text-neutral-700 md:text-2xl max-w-2xl">
              Confidential coordination infrastructure for multiparty systems
            </p>

            <div className="mt-12 max-w-[42rem] space-y-6 text-[18px] leading-8 text-neutral-700 md:text-[19px] md:leading-9">

              <p>
                Much of our coordination now happens inside digital systems.
                Markets clear. Votes are tallied. Models are trained.
              </p>

              <p className="ml-10 md:ml-24">
                But the participants in these systems rarely share the
                conditions required to coordinate safely.
              </p>

              <p>
                <strong>The Interfold</strong> is a distributed network for
                confidential coordination. Independent parties compute shared,
                verifiable outcomes from private inputs.
              </p>

              <p className="ml-10 md:ml-24">
                Result: fairer auctions, stronger democratic systems, and
                collaborative intelligence without custody, exposure, or
                trusted hardware.
              </p>

            </div>

          </div>

          {/* RIGHT COLUMN LINKS */}

          <aside className="max-w-sm lg:pt-[22rem] lg:pl-6">

            <div className="flex flex-col gap-4 text-[1.8rem] leading-[1.1] font-medium">

              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-4 text-neutral-900 transition hover:translate-x-0.5"
                >
                  <span className="text-xl text-neutral-400 transition group-hover:text-neutral-950">
                    →
                  </span>

                  <span className="tracking-[-0.02em]">
                    {link.label}
                  </span>

                </a>
              ))}

            </div>

          </aside>

        </div>

        {/* USE CASE LIST */}

        <div className="mt-20 border-t border-neutral-200 pt-14">

          <div className="grid grid-cols-1 gap-y-6 text-sm uppercase tracking-[0.18em] text-neutral-500 md:grid-cols-2 lg:grid-cols-3 md:gap-y-8">

            <span>private governance</span>
            <span>confidential auctions</span>
            <span>institutional collaboration</span>
            <span>multi-agent systems</span>
            <span>cross-organizational analytics</span>
            <span>coordinated markets</span>
            <span>collective intelligence</span>
            <span>data collaboration</span>
            <span>private voting</span>

          </div>

          {/* FOOTER */}

          <div className="mt-16 text-sm text-neutral-500 flex flex-col gap-2 font-footer">

            <p>
              Open source protocol. Built by
              <a
                href="https://www.gnosisguild.org/"
                target="_blank"
                className="ml-1 underline"
              >
                Gnosis Guild
              </a>
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-neutral-600">

              <a href="https://github.com/gnosisguild/enclave" target="_blank">
                GitHub
              </a>

              <a href="https://t.me/enclave_e3" target="_blank">
                Telegram
              </a>

              <a href="https://x.com/theinterfold" target="_blank">
                X
              </a>

              <a href="mailto:comms@gnosisguild.com">
                Email
              </a>

            </div>

          </div>

        </div>

      </div>
    </main>
  )
}

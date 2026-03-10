export default function Content() {
  const links = [
    { label: 'Explore the docs', href: 'https://docs.theinterfold.com/' },
    { label: 'Run a ciphernode', href: '/ciphernode' },
    { label: 'Read the blog', href: 'https://blog.theinterfold.com/' },
  ]

  return (
    <>
      <header className="w-full bg-neutral-50">
        <div className="border-b border-neutral-200/60 px-4 py-2 text-center text-[13px] text-neutral-700 sm:px-6 sm:text-sm md:px-10 lg:px-12">
          Enclave is now The Interfold.{' '}
          <a
            href="https://blog.theinterfold.com"
            className="underline underline-offset-2 transition hover:text-neutral-900"
          >
            More on our blog soon.
          </a>
        </div>

        <div className="mx-auto w-full max-w-6xl px-5 py-4 sm:px-6 md:px-10 md:py-5 lg:px-12">
          <a href="https://theinterfold.com" className="inline-block">
            <img
              src="/interfold-logo.png"
              alt="The Interfold"
              className="w-[140px] sm:w-[150px] md:w-[170px] opacity-95 transition duration-500 ease-out hover:-translate-y-[1px] hover:opacity-80 hover:duration-150"
            />
          </a>
        </div>
      </header>

      <main className="relative min-h-screen overflow-hidden bg-[#d9fce8] text-neutral-950 antialiased font-sans">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(140deg, transparent 48%, rgba(0,0,0,0.08) 49%, transparent 50%),
              linear-gradient(320deg, transparent 48%, rgba(0,0,0,0.06) 49%, transparent 50%)
            `,
            backgroundSize: '1200px 800px',
          }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 md:px-10 md:py-14 lg:px-12 lg:py-8">
          <div className="mt-8 grid gap-x-16 gap-y-10 lg:mt-10 lg:grid-cols-[minmax(0,_1fr)_360px]">
            <div className="max-w-4xl">
              <h1 className="font-sans text-balance text-[2.7rem] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[3.5rem] md:text-7xl lg:text-[5.5rem]">
                <span className="block whitespace-nowrap">Private Inputs.</span>
                <span className="-ml-[0.02em] block whitespace-nowrap">
                  Collective Outcomes.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg font-medium text-neutral-700 sm:text-xl md:mt-10 md:text-2xl">
                Infrastructure for confidential coordination
              </p>

              <div className="mt-8 max-w-[38rem] space-y-5 font-serif text-[17px] leading-7 text-neutral-700 sm:text-[18px] sm:leading-8 md:mt-10 md:space-y-6 md:text-[19px] md:leading-9">
                <p>
                  <strong>The Interfold</strong> enables independent parties to
                  produce shared, verifiable outcomes from private inputs.
                </p>

                <p>
                  It introduces a structural fold in digital systems, making
                  coordination possible without custody, exposure, or trusted
                  hardware.
                </p>
              </div>
            </div>

            <aside className="max-w-sm pt-2 lg:pt-[18rem] lg:pl-6">
              <div className="flex flex-col gap-2 text-[1.5rem] leading-[1.05] sm:text-[1.8rem] md:gap-3 md:text-[2.35rem]">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-baseline gap-4 font-medium text-neutral-900 transition duration-500 ease-out hover:translate-x-0.5 hover:duration-150"
                  >
                    <span className="text-[1.2rem] font-bold text-neutral-500 transition group-hover:text-neutral-950 sm:text-[1.4rem] md:text-[1.8rem]">
                      →
                    </span>
                    <span className="tracking-[-0.04em]">{link.label}</span>
                  </a>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-12 md:mt-14">
            <p className="text-[1.05rem] font-medium leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-[1.2rem] md:text-[1.45rem] lg:text-[1.6rem]">
              Fairer auctions. Collaborative intelligence. Stronger democratic systems.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-black/5 bg-white/20 md:mt-10">
            <img
              src="/interfold-meta.jpg"
              alt="The Interfold"
              className="h-[220px] w-full object-cover sm:h-[280px] md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </main>
    </>
  )
}

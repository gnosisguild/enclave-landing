export default function Content() {
  const links = [
    { label: 'Explore the docs', href: 'https://docs.theinterfold.com/' },
    { label: 'Run a ciphernode', href: '/ciphernode' },
    { label: 'Read the blog', href: 'https://blog.theinterfold.com/' },
  ]

  return (
    <>
      <header className="w-full border-b border-neutral-200/60 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-5 md:px-10 lg:px-12">
          <a href="https://theinterfold.com" className="inline-block">
            <img
              src="/interfold-logo.png"
              alt="The Interfold"
              className="w-[150px] md:w-[170px] opacity-95 transition duration-500 ease-out hover:-translate-y-[1px] hover:opacity-80 hover:duration-150"
            />
          </a>
        </div>
      </header>

      <main className="relative min-h-screen bg-[#d9fce8] text-neutral-950 antialiased font-sans overflow-hidden">
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

        <div className="relative mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-14 lg:px-12 lg:py-8">
          <div className="mt-10 grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,_1fr)_360px]">
            <div className="max-w-4xl">
              <h1 className="font-sans text-balance text-5xl font-bold leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-[5.5rem]">
                
                <span className="block whitespace-nowrap">Private Inputs.</span>
                <span className="-ml-[0.02em] block whitespace-nowrap">
                  Collective Outcomes.
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-xl font-medium text-neutral-700 md:text-2xl">
                Infrastructure for confidential coordination
              </p>

              <div className="mt-10 max-w-[38rem] space-y-6 font-serif text-[18px] leading-8 text-neutral-700 md:text-[19px] md:leading-9">
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

            <aside className="max-w-sm lg:pt-[18rem] lg:pl-6">
              <div className="flex flex-col gap-3 text-[2rem] leading-[1.05] md:text-[2.35rem]">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-baseline gap-4 font-medium text-neutral-900 transition duration-500 ease-out hover:translate-x-0.5 hover:duration-150"
                  >
                    <span className="text-[1.6rem] font-bold text-neutral-500 transition group-hover:text-neutral-950 md:text-[1.8rem]">
                      →
                    </span>
                    <span className="tracking-[-0.04em]">{link.label}</span>
                  </a>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-20 pt-4">
            <div className="grid grid-cols-12 items-start text-neutral-900">
              <span className="col-span-6 text-[1.35rem] font-medium leading-[1.02] tracking-[-0.035em] md:text-[1.7rem] lg:text-[1.9rem]">
                <span>Fairer auctions.</span>
              </span>

              <span className="col-span-6 col-start-4 mt-6 text-[1.35rem] font-medium leading-[1.02] tracking-[-0.035em] md:mt-8 md:text-[1.7rem] lg:mt-10 lg:text-[1.9rem]">
                <span>Collaborative intelligence.</span>
              </span>

              <span className="col-span-6 col-start-7 mt-6 text-right text-[1.35rem] font-medium leading-[1.02] tracking-[-0.035em] md:mt-8 md:text-[1.7rem] lg:mt-10 lg:text-[1.9rem]">
                <span>Stronger democratic systems.</span>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

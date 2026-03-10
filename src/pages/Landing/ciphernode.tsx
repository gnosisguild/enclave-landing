export default function Content() {
  const links = [
    { label: 'Read the docs', href: 'https://docs.theinterfold.com/' },
    { label: 'Run a node', href: 'https://www.theinterfold.com/ciphernode' },
    { label: 'Read the blog', href: 'https://blog.theinterfold.com/' },
  ]

  return (
    <main className="min-h-screen bg-[#d9fce8] text-neutral-950 antialiased font-sans">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">
        <img
          src="/interfold-logo.png"
          alt="The Interfold"
          className="w-[180px] md:w-[210px] opacity-95"
        />

        <div className="mt-12 grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,_1fr)_360px]">
          <div className="max-w-4xl border-l border-neutral-300 pl-6">
            <h1 className="font-display text-balance text-5xl font-bold leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-[5.5rem]">
              <span className="block">Private Inputs.</span>
              <span className="-ml-[0.02em] block whitespace-nowrap">
                Collective Outcomes.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-xl italic text-neutral-700 md:text-2xl">
              Infrastructure for confidential coordination between independent parties
            </p>

            <div className="mt-10 max-w-[42rem] space-y-6 text-[18px] leading-8 text-neutral-700 md:text-[19px] md:leading-9">
              <p>
                Much of our coordination now happens inside digital systems.
                Markets clear. Votes are tallied. Models are trained. But the
                participants rarely share the conditions required to coordinate
                safely.
              </p>

              <p>
                <strong>The Interfold</strong> is a distributed network for
                confidential coordination. Independent parties compute shared,
                verifiable outcomes from private inputs.
              </p>
            </div>

            <div className="mt-10 border-l-4 border-neutral-900 pl-6 text-[19px] leading-8 text-neutral-800 md:text-[20px] md:leading-9">
              <p className="font-medium">
                Fairer auctions. Stronger democratic systems. Collaborative intelligence.
              </p>
              <p className="mt-2 text-neutral-600">
                All without custody, exposure, or trusted hardware.
              </p>
            </div>
          </div>

          <aside className="max-w-sm lg:pt-[18rem] lg:pl-6">
            <div className="flex flex-col gap-3 text-[2rem] leading-[1.05] md:text-[2.35rem]">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-4 font-medium text-neutral-900 transition hover:translate-x-0.5"
                >
                  <span className="text-xl text-neutral-400 transition group-hover:text-neutral-950 md:text-2xl">
                    →
                  </span>
                  <span className="tracking-[-0.04em] lowercase">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-20 border-t border-neutral-200 pt-14">
          <div className="grid grid-cols-1 gap-y-6 text-sm uppercase tracking-[0.18em] text-neutral-500 md:grid-cols-2 lg:grid-cols-3 md:gap-y-8">
            <span>private governance</span>
            <span>confidential auctions</span>
            <span>institutional collaboration</span>
            <span>multi-agent systems</span>
            <span>cross-organizational analytics</span>
            <span>private voting</span>
          </div>
        </div>
      </div>
    </main>
  )
}

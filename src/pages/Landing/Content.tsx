export default function Content() {
  const links = [
    { label: 'Read the Docs', href: 'https://docs.theinterfold.com/' },
    { label: 'Run a Node', href: '/ciphernode' },
    { label: 'Read the blog', href: 'https://blog.theinterfold.com/' },
  ]

  return (
    <>
      <header className="w-full bg-[#d9fce8]">
        <div className="border-b border-neutral-200/60 px-4 py-2 text-center text-[12px] text-neutral-700 sm:px-6 sm:text-sm md:px-10 lg:px-12">
          Enclave is now The Interfold.{' '}
          <a
            href="https://blog.theinterfold.com/blah"
            className="underline underline-offset-2 transition hover:text-neutral-900"
          >
            Learn more.
          </a>
        </div>

        <div className="mx-auto w-full max-w-5xl px-5 py-2 sm:px-6 md:px-10 lg:px-12">
          <a href="https://theinterfold.com" className="inline-block">
            <img
              src="/interfold-logo.png"
              alt="The Interfold"
              className="w-[140px] sm:w-[150px] md:w-[165px] opacity-95 transition duration-500 ease-out hover:-translate-y-[1px] hover:opacity-80 hover:duration-150"
            />
          </a>
        </div>
      </header>

      <main className="bg-[#d9fce8] text-neutral-950 antialiased">
        <div className="mx-auto max-w-5xl px-5 pb-20 pt-14 sm:px-6 sm:pt-16 md:px-10 md:pt-24 lg:px-12 lg:pt-28">

          <div className="max-w-[820px]">
            <h1 className="font-sans text-[2.4rem] font-bold leading-[0.94] tracking-[-0.045em] sm:text-[3.4rem] md:text-[4.5rem] lg:text-[5.1rem]">
              <span className="block">Private Inputs.</span>
              <span className="block whitespace-nowrap">Collective Outcomes.</span>
            </h1>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-[minmax(0,1fr)_220px] md:items-start">

            <div className="max-w-[560px]">
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-600 sm:text-[12px]">
                Infrastructure for confidential coordination
              </p>

              <div className="mt-6 max-w-[540px] font-serif text-[15px] leading-[1.05] text-neutral-800 sm:text-[17px] md:text-[18px]">
                <p>
                  <strong>The Interfold</strong> is a distributed network for confidential
                  coordination. Independent parties compute shared, verifiable outcomes
                  from private inputs.
                </p>

                <p className="mt-4">
                  Result: fairer auctions, stronger democratic systems, and
                  collaborative intelligence without custody, exposure, or trusted
                  hardware.
                </p>
              </div>
            </div>

            <aside className="md:pt-12">
              <div className="flex flex-col gap-1 font-sans text-[16px] font-semibold leading-[1.1] text-neutral-950 sm:text-[17px]">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-baseline gap-2 transition duration-500 ease-out hover:translate-x-0.5 hover:duration-150"
                  >
                    <span className="text-neutral-700 transition group-hover:text-neutral-950">
                      —
                    </span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </aside>

          </div>

          <div className="mt-14 mb-20 max-w-[420px] pl-8 md:pl-10 font-serif text-[16px] leading-[1] text-neutral-900 sm:text-[18px] md:max-w-[520px] md:text-[20px]">
            <p>Stronger democratic systems.</p>
            <p>Collaborative intelligence.</p>
            <p>Fairer auctions.</p>
          </div>

        </div>
      </main>
    </>
  )
}

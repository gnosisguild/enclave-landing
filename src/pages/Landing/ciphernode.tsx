export default function RunCiphernode() {
  return (
    <div className="min-h-screen w-full bg-[#d9fce8] text-neutral-950 font-sans">
      <header className="relative z-20 w-full border-b border-neutral-200/60 bg-neutral-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-5 md:px-10 lg:px-12">
          <a href="/" className="inline-block">
            <img
              src="/interfold-logo.png"
              alt="The Interfold"
              className="w-[150px] md:w-[170px] opacity-95 transition duration-500 ease-out hover:-translate-y-[1px] hover:opacity-80 hover:duration-150"
            />
          </a>
        </div>
      </header>

      <main className="relative z-10 w-full">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="mb-10 font-display text-4xl font-bold tracking-[-0.03em]">
            Run a Ciphernode
          </h1>

          <div className="overflow-hidden rounded-xl border border-black/5 bg-white/40 shadow-sm backdrop-blur-sm">
            <iframe
              src="https://tally.so/r/meJPjo"
              width="100%"
              height="1150"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Run a Ciphernode"
              className="w-full"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

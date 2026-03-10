export default function RunCiphernode() {
  return (
    <>
      {/* Header stripe (same as homepage) */}
      <header className="w-full border-b border-neutral-200/60 bg-neutral-50">
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

      {/* Green page */}
      <main className="min-h-screen bg-[#d9fce8] text-neutral-950 font-sans">
        <div className="mx-auto max-w-3xl px-6 py-16">

          <h1 className="font-display text-4xl font-bold tracking-[-0.03em] mb-10">
            Run a Ciphernode
          </h1>

          {/* Native-feeling form container */}
          <div className="rounded-xl bg-white/40 backdrop-blur-sm shadow-sm border border-black/5 overflow-hidden">

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
    </>
  )
}

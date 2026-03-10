export default function RunCiphernode() {
  return (
    <>
      <header className="w-full bg-[#d9fce8]">
        {/* Banner */}
        <div className="border-b border-neutral-200/60 px-4 py-2 text-center text-[12px] text-neutral-700 sm:px-6 sm:text-sm md:px-10 lg:px-12">
          Enclave is now The Interfold.{" "}
          <a
            href="https://blog.theinterfold.com/"
            className="underline underline-offset-2 transition hover:text-neutral-900"
          >
            Learn more.
          </a>
        </div>

        {/* Logo */}
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

      <div className="min-h-screen w-full bg-[#d9fce8] flex justify-center px-5 pt-8 pb-16">
        <iframe
          src="https://tally.so/r/meJPjo"
          width="100%"
          height="2000"
          frameBorder="0"
          title="Run a Ciphernode"
          style={{ maxWidth: "900px", border: "none" }}
        />
      </div>
    </>
  )
}

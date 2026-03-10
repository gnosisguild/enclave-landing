export default function RunCiphernode() {
  return (
    <>
      <header className="w-full bg-neutral-50">
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

      <div className="min-h-screen w-full bg-[#d9fce8] flex justify-center">
        <iframe
          src="https://tally.so/r/meJPjo"
          width="100%"
          height="2000"
          frameBorder="0"
          title="Run a Ciphernode"
          style={{ maxWidth: '900px', border: 'none' }}
        />
      </div>
    </>
  )
}

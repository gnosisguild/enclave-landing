import Content from './Content'

const Landing = () => {
  return (
    <main className='flex h-full w-full flex-grow flex-col px-6 py-8'>
      <Content />
      <div className='absolute inset-0 z-10 h-full w-full p-4 sm:inset-auto sm:right-0 sm:top-0 sm:w-auto'>
        <img src='/icon-stack.svg' alt='Enclave Stack' className='mx-auto h-full opacity-20 sm:opacity-40' />
      </div>
    </main>
  )
}

export default Landing

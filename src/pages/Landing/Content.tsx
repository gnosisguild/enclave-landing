const Content = () => {
  return (
    <div className='flex flex-col gap-8'>
      <img src='/enclave-logo-solid.svg' alt='Enclave Logo' className='w-60' />
      <div className='flex flex-col gap-4'>
        <p className='text-xl md:text-3xl'>Encrypted Execution Environments (E3)</p>
        <a href='https://docs.enclave.gg/whitepaper' className='text-lg'>
          Read the whitepaper &#x2197;
        </a>
        <a href='https://blog.enclave.gg/' className='text-lg' target='_blank'>
          Check out the blog &#x2197;
        </a>
      </div>
    </div>
  )
}

export default Content

const Content = () => {
  return (
    <div className='flex flex-col gap-8'>
      <img src='/enclave-logo-solid.svg' alt='Enclave Logo' className='w-60' />      
      <div className='flex flex-col gap-4'>
        <p className='text-xl md:text-3xl'><strong></strong>A protocol for verifiable, confidential programs.</strong></p>
        <p className='text-lg md:text-xl'>Enclave’s Encrypted Execution Environments (E3s) let developers run programs<br />
on encrypted data from multiple sources — without exposing inputs or relying on trusted hardware.
</p>
        <br />
        <br />
        <a href='https://docs.enclave.gg/' className='text-lg' target='_blank'>
          <strong>Start building on the Devnet &#x2197;</strong>
        </a>
        <a href='https://tally.so/r/meJPjo' className='text-lg' target='_blank'>
          <strong>Apply to become an early Ciphernode operator &#x2197;</strong>
        </a>
        <a href='https://docs.enclave.gg/whitepaper' className='text-lg'>
          <strong>Read the whitepaper &#x2197;</strong>
        </a>
        <a href='https://blog.enclave.gg/' className='text-lg' target='_blank'>
          <strong>Learn more on the blog &#x2197;</strong>
        </a>
      </div>
    </div>
  )
}
export default Content


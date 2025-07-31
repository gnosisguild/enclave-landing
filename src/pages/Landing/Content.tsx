const Content = () => {
  return (
    <div className='flex flex-col gap-8'>
      <img src='/enclave-logo-solid.svg' alt='Enclave Logo' className='w-60' />      
      <div className='flex flex-col gap-4'>
        <p className='text-xl md:text-3xl'>A protocol for programs that are verifiable and confidential.</p>
        <p className='text-lg md:text-xl'>Enclave's Encrypted Execution Environments (E3s) make multiparty computation private, provable, and deployable anywhere, without trusted hardware or attestations.</p>
        <a href='https://docs.enclave.gg/' className='text-lg' target='_blank'>
          Start building on the Devnet &#x2197;
        </a>
        <a href='https://docs.enclave.gg/whitepaper' className='text-lg'>
          Read the whitepaper &#x2197;
        </a>
        <a href='https://blog.enclave.gg/' className='text-lg' target='_blank'>
          Learn more on the blog &#x2197;
        </a>
        <a href='https://t.me/enclave_e3/' className='text-lg' target='_blank'>
          Join the Telegram &#x2197;
        </a>
      </div>
    </div>
  )
}
export default Content


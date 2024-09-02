import { FarcasterLogo, TelegramLogo, XLogo } from '@/components/Icons'
import { ReactElement } from 'react'

interface SocialLinksProps {
  name: string
  icon: ReactElement
  url: string
}

export const socialLinks: SocialLinksProps[] = [
  {
    name: 'twitter',
    icon: <XLogo size={24} />,
    url: 'https://x.com/EnclaveE3',
  },
  {
    name: 'farcaster',
    icon: <FarcasterLogo size={24} />,
    url: 'https://warpcast.com/enclavee3',
  },
  {
    name: 'telegram',
    icon: <TelegramLogo size={24} />,
    url: 'https://t.me/enclave_e3',
  },
]

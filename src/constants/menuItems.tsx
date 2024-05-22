import { FarcasterLogo, XLogo } from '@/components/Icons'
import { ReactElement } from 'react'

interface MenuItemsProps {
  name: string
  icon: ReactElement
  url: string
}

export const menuItems: MenuItemsProps[] = [
  {
    name: 'twitter',
    icon: <XLogo size={24} />,
    url: '#',
  },
  {
    name: 'farcaster',
    icon: <FarcasterLogo size={24} />,
    url: '#',
  },
]

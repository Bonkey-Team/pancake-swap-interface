import { MenuEntry, menuStatus } from 'plkit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://finance.bonkey.org/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://finance.bonkey.org/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://finance.bonkey.org/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://finance.bonkey.org/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://pancakeswap.finance/nft',
  },
  /*
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://pancakeswap.finance/competition',
    status: menuStatus.LIVE,
  },
 */
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://finance.bonkey.org/teams',
      },
      /*
      {
        label: 'Task Center',
        href: 'https://pancakeswap.finance/profile/tasks',
      },
     */
      {
        label: 'Your Profile',
        href: 'https://finance.bonkey.org/profile',
      },
    ],
  },
  /*
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://pancakeswap.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.pancakeswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
 */
]

export default config

import { GoSearch } from 'react-icons/go';
import { BiShoppingBag } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { MdEventAvailable } from 'react-icons/md';
import { FaUsers, FaVideo } from 'react-icons/fa';

import BennyDayal from './assets/BennyDayal.png';
import VijayYesudas from './assets/VijayYesudas.png';
import AndreaJeremiah from './assets/AndreaJeremiah.png';
import ShilpaRao from './assets/ShilpaRao.png';

import HellenJummy from './assets/HellenJummy.png';
import IsaacOluwatemilorun from './assets/IsaacOluwatemilorun.png';
import PaulVishwas from './assets/PaulVishwas.png';

export const navLinks = [
  {
    name: 'search',
    icon: <GoSearch />,
  },
  {
    name: 'help',
  },
  {
    name: 'account',
  },
  {
    icon: <BiShoppingBag />,
  },
];

export const progressDials = [
  {
    name: 'likes everyday',
    icon: <BsHeart />,
    count: 456,
  },
  {
    name: 'Online events',
    icon: <MdEventAvailable />,
    count: 745,
  },
  {
    name: 'users',
    icon: <FaUsers />,
    count: 695,
  },
  {
    name: 'views everyday',
    icon: <FaVideo />,
    count: 950,
  },
];

export const shows = [
  {
    image: BennyDayal,
    genre: 'folk',
    name: 'benny dayal',
    url: '',
  },
  {
    image: VijayYesudas,
    genre: 'bollywood',
    name: 'Vijay Yesudas',
    url: '',
  },
  {
    image: AndreaJeremiah,
    genre: 'folk',
    name: 'Andrea Jeremiah',
    url: '',
  },
  {
    image: ShilpaRao,
    genre: 'folk',
    name: 'Shilpa Rao',
    url: '',
  },
];

export const reviews = [
  {
    name: 'Hellen Jummy',
    profileUrl: HellenJummy,
    flag: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-united-states_1f1fa-1f1f8.png',
    address: 'Palo Alto, CA',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.',
  },
  {
    name: 'Isaac Oluwatemil',
    profileUrl: IsaacOluwatemilorun,
    flag: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-italy_1f1ee-1f1f9.png',
    address: 'Palo Alto, CA',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.',
  },
  {
    name: 'Paul Vishwas',
    profileUrl: PaulVishwas,
    flag: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flag-united-states_1f1fa-1f1f8.png',
    address: 'Palo Alto, CA',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.',
  },
];

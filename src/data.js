import { GoSearch } from 'react-icons/go';
import { BiShoppingBag } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { MdEventAvailable } from 'react-icons/md';
import { FaUsers, FaVideo } from 'react-icons/fa';

import BennyDayal from './assets/BennyDayal.png';
import VijayYesudas from './assets/VijayYesudas.png';
import AndreaJeremiah from './assets/AndreaJeremiah.png';
import ShilpaRao from './assets/ShilpaRao.png';

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
    name: 'likes',
    icon: <BsHeart />,
    count: 1000,
  },
  {
    name: 'events',
    icon: <MdEventAvailable />,
    count: 100,
  },
  {
    name: 'users',
    icon: <FaUsers />,
    count: 300,
  },
  {
    name: 'views',
    icon: <FaVideo />,
    count: 500,
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

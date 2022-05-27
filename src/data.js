import { GoSearch } from 'react-icons/go';
import { BiShoppingBag } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { MdEventAvailable } from 'react-icons/md';
import { FaUsers, FaVideo } from 'react-icons/fa';

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

import React from 'react';
import Wrapper from './styles';
import logo from '../../assets/logo.png';
import { navLinks } from '../../data';
import { FaBars } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { BiShoppingBag } from 'react-icons/bi';
import { useGlobalContext } from '../../context/GlobalContext';

export default function Navbar() {
  const { openSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <div className='nav-header'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='btn-container'>
          <button className='nav-toggle'>
            <GoSearch />
          </button>
          <button className='nav-toggle'>
            <BiShoppingBag />
          </button>
          <button className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
      <div className='links-container'>
        <ul className='nav-links'>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                {link.icon && link.icon}
                {link.name && <span>{link.name}</span>}
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
}

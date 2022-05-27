import React, { useState } from 'react';
import Wrapper from './styles';
import logo from '../../assets/logo.png';
import { navLinks } from '../../data';
import { FaBars } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { BiShoppingBag } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setShow((prev) => {
      return !prev;
    });
  };

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
          <button className='nav-toggle' onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
      <div className={`${show ? 'links-container show' : 'links-container'}`}>
        <button className='close-btn' onClick={toggleSidebar}>
          <IoCloseSharp />
        </button>
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

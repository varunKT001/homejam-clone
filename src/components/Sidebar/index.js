import React from 'react';
import Wrapper from './styles';
import { useGlobalContext } from '../../context/GlobalContext';
import { IoCloseOutline } from 'react-icons/io5';

export default function Sidebar() {
  const { sidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <div
        className={`${
          sidebarOpen ? 'links-container show' : 'links-container'
        }`}
      >
        <button className='close-btn' onClick={closeSidebar}>
          <IoCloseOutline />
        </button>
        <ul className='nav-links'>
          <li>help</li>
          <li>account</li>
        </ul>
      </div>
    </Wrapper>
  );
}

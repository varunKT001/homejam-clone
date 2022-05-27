import React, { useState } from 'react';
import Wrapper from './styles';
import { BsArrowRight } from 'react-icons/bs';
import { IoTicketOutline, IoTicketSharp } from 'react-icons/io5';

export default function ShowsCard({ image, genre, name, url }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Wrapper>
      <div className='image'>
        <img src={image} alt='main image' />
      </div>
      <div className='info'>
        <span className='genre'>{genre}</span>
        <p className='name'>{name}</p>
        <div className='actions'>
          <button className='more-info-btn'>
            more info
            <BsArrowRight className='info-icon-btn' />
          </button>
          <div
            className='book'
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
          >
            <div className='vertical-divider'></div>
            {isMouseOver ? <IoTicketSharp /> : <IoTicketOutline />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

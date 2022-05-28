import React from 'react';
import Wrapper from './styles';
import { reviews } from '../../data';
import ReviewCard from '../ReviewCard';
import SectionHeading from '../SectionHeading';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export default function ReviewsContainer() {
  return (
    <Wrapper>
      <SectionHeading title='reviews'>
        <div className='side'>
          <div className='page'>
            <span className='active-page'>1</span>
            <span>/12</span>
          </div>
          <div className='arrow-btn-container'>
            <BsArrowLeft />
            <BsArrowRight />
          </div>
        </div>
      </SectionHeading>
      <div className='reviews'>
        {reviews.map((review, index) => {
          return <ReviewCard key={index} {...review} />;
        })}
      </div>
    </Wrapper>
  );
}

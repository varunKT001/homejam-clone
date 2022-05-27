import React from 'react';
import SectionHeading from '../SectionHeading';
import { shows } from '../../data';
import Wrapper from './styles';
import ShowsCard from '../ShowsCard';

export default function UpcomingShows() {
  return (
    <Wrapper>
      <SectionHeading title='upcoming shows'>
        <span className='side'>view all</span>
      </SectionHeading>
      <div className='shows'>
        {shows.map((show, index) => {
          return <ShowsCard key={index} {...show} />;
        })}
      </div>
    </Wrapper>
  );
}

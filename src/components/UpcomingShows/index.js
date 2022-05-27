import React from 'react';
import SectionHeading from '../SectionHeading';
import Wrapper from './styles';

export default function UpcomingShows() {
  return (
    <Wrapper>
      <SectionHeading title='upcoming shows'>
        <span className='side'>view all</span>
      </SectionHeading>
    </Wrapper>
  );
}

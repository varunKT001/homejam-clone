import React from 'react';
import Wrapper from './styles';

export default function SectionHeading({ title, children }) {
  return (
    <Wrapper>
      <div className='section-heading'>
        <h3>{title}</h3>
        <div className='underline'></div>
      </div>
      <div className='section-heading-children'>{children}</div>
    </Wrapper>
  );
}

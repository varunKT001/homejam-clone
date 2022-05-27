import React from 'react';
import Wrapper from './styles';

export default function ProgressDial({ icon, name, count }) {
  return (
    <Wrapper>
      <span className='progress-dial-icon'>{icon}</span>
      <span className='progress-dial-count'>{count}+</span>
      <span className='progress-dial-label'>{name}</span>
    </Wrapper>
  );
}

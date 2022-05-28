import React from 'react';
import Wrapper from './styles';

export default function ReviewCard({
  name,
  profileUrl,
  flag,
  address,
  review,
}) {
  return (
    <Wrapper>
      <div className='user-info'>
        <div className='user-image'>
          <img src={profileUrl} alt='user profile' />
        </div>
        <div className='user-name'>{name}</div>
        <div className='user-address'>
          <img src={flag} alt='user flag' />
          {address}
        </div>
      </div>
      <div className='user-review'>{review}</div>
    </Wrapper>
  );
}

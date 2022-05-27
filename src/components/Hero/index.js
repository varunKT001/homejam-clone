import React from 'react';
import ProgressDialContainer from '../ProgressDialContainer';
import Wrapper from './styles';

export default function Hero() {
  return (
    <Wrapper>
      <article className='hero-header'>
        <h1>Cari Cari</h1>
        <p>
          Live from their sofa to yours. Get closer to your favorite artists,
          and never miss out.
        </p>
      </article>
      <ProgressDialContainer />
    </Wrapper>
  );
}

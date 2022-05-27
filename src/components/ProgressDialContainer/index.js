import React from 'react';
import Wrapper from './styles';
import ProgressDial from '../ProgressDial';
import { progressDials } from '../../data';

export default function ProgressDialContainer() {
  return (
    <Wrapper>
      {progressDials.map((item, index) => {
        return <ProgressDial key={index} {...item} />;
      })}
    </Wrapper>
  );
}

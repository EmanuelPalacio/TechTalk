import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Writing() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 12V9.5L19.5 2 22 4.5 14.5 12H12z'
        fill='#1D3244'
        stroke='#F7F7F7'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8 12H4.5a2.5 2.5 0 000 5h15a2.5 2.5 0 010 5H9'
        stroke='#F7F7F7'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

export default Writing;

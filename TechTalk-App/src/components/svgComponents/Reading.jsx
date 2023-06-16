import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Reading() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path d='M20 20c-3.45 0-8 2-8 2V11s4.5-2 9-2l-1 11z' fill='#FFBBDE' />
      <Path d='M4 20c3.45 0 8 2 8 2V11S7.5 9 3 9l1 11z' fill='#F7F7F7' />
      <Path
        d='M15.85 6a3.85 3.85 0 11-7.7 0 3.85 3.85 0 017.7 0zM21 15.85h-.5c-.767 0-1.35-.583-1.35-1.35 0-.767.583-1.35 1.35-1.35h.5c.116 0 .2.038.256.094a.35.35 0 01.094.256v2a.35.35 0 01-.094.256.35.35 0 01-.256.094zm-18-2.7h.5c.767 0 1.35.583 1.35 1.35 0 .767-.583 1.35-1.35 1.35H3a.351.351 0 01-.256-.094.35.35 0 01-.094-.256v-2c0-.116.038-.2.094-.256A.351.351 0 013 13.15z'
        fill='#1D3244'
        stroke='#1D3244'
        strokeWidth={0.3}
      />
    </Svg>
  );
}

export default Reading;

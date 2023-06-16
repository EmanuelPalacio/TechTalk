import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import theme from '../../theme/theme';

function TabMenssage({ focused }) {
  return (
    <Svg
      width={27}
      height={28}
      viewBox='0 0 27 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path
        d='M.54 17.12l-.46.39 6.8.84c.995.4 2.031.685 3.09.85.35-3.46 4-6.19 8.51-6.19a10.12 10.12 0 014.87 1.21 7.77 7.77 0 001.36-4.39C24.71 4.58 19.22.3 12.46.3S.21 4.62.21 9.83a8.06 8.06 0 002 5.27l.13.14c-.52.699-1.125 1.33-1.8 1.88zM4.31 5.64h16v.87h-16v-.87zm0 3.22h16v.87h-16v-.87zm0 3.22h8.45v.86H4.31v-.86z'
        fill={focused ? theme.color.primary : theme.tabInactive.light}
      />
      <Path
        d='M10.64 19.75c0 3.33 3.51 6 7.84 6a9.703 9.703 0 002.79-.4l.19-.05 2.2 2v-3.09l.14-.11a5.52 5.52 0 002.52-4.42c0-3.33-3.52-6-7.84-6s-7.84 2.74-7.84 6.07z'
        fill={focused ? theme.color.secondaryLight : theme.tabInactive.normal}
      />
      <Path
        d='M20.27 5.64H4.3v.87h15.97v-.87zM20.27 8.86H4.3v.87h15.97v-.87zM12.75 12.08H4.3v.87h8.45v-.87z'
        fill={focused ? theme.color.secondary : theme.tabInactive.dark}
      />
    </Svg>
  );
}

export default TabMenssage;

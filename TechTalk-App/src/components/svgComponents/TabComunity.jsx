import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import theme from '../../theme/theme';

function TabComunity({ focused }) {
  return (
    <Svg
      width={38}
      height={12}
      viewBox='0 0 38 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path
        d='M.87 7.06v.07h4a3.24 3.24 0 10-3.25-3.24v1.8a1.46 1.46 0 01-.75 1.37zM6.82 7.44H3.06a3.05 3.05 0 00-3 3.06v1.48h9.86V10.5a3 3 0 00-3.1-3.06z'
        fill={focused ? theme.color.primary : theme.tabInactive.light}
      />
      <Path
        d='M9.91 4.39a2.42 2.42 0 104.84 0 2.42 2.42 0 00-4.84 0z'
        fill={focused ? theme.color.secondaryLight : theme.tabInactive.normal}
      />
      <Path
        d='M15.57 3.83A3.27 3.27 0 1018.83.55a3.26 3.26 0 00-3.26 3.28zM20.74 7.38h-3.79a3.08 3.08 0 00-3.07 3.07v1.5h9.93v-1.49a3.09 3.09 0 00-3.07-3.08zM29.47 3.83a3.27 3.27 0 106.541-.02 3.27 3.27 0 00-6.541.02zM34.63 7.36h-3.78a3.08 3.08 0 00-3.07 3.08v1.49h9.93v-1.5a3.06 3.06 0 00-3.08-3.07z'
        fill={focused ? theme.color.primary : theme.tabInactive.light}
      />
      <Path
        d='M23.96 7.01a2.23 2.23 0 00-1.39.48 3.47 3.47 0 011.65 2.89h3.2a3.46 3.46 0 011.13-2.49 2.26 2.26 0 00-1.79-.88h-2.8zM9.14 7.92a3.43 3.43 0 011.14 2.48h3.21a3.46 3.46 0 011.64-2.89 2.23 2.23 0 00-1.4-.49h-2.8a2.24 2.24 0 00-1.79.9zM25.21 1.96a2.42 2.42 0 00.17 4.83h3v-.05a1.09 1.09 0 01-.62-1v-1.3a2.42 2.42 0 00-2.55-2.48z'
        fill={focused ? theme.color.secondaryLight : theme.tabInactive.normal}
      />
    </Svg>
  );
}

export default TabComunity;

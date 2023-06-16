import Svg, { Defs, G, Path, Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

export default function Camera() {
  return (
    <Svg
      height={30}
      width={40}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 44.07 34.53'
      fill='#FFBBDE'
    >
      <Defs />
      <G id='f282f530-db96-4ab5-ac1a-e16d9d25db30' data-name='Capa 2'>
        <G id='edb2c37f-db52-468b-afa4-4597f56e6835' data-name='OBJECTS'>
          <Path
            className='e630b27a-ba98-4499-9549-412f4f34d1c2'
            d='M39.62 6.39H34.7V3.6A3.6 3.6 0 0031.1 0H13a3.6 3.6 0 00-3.6 3.6v2.79H4.45A4.45 4.45 0 000 10.84v19.24a4.45 4.45 0 004.45 4.45h35.17a4.45 4.45 0 004.45-4.45V10.84a4.45 4.45 0 00-4.45-4.45zM22.13 30.51A10.49 10.49 0 1132.61 20a10.49 10.49 0 01-10.48 10.51z'
          />
          <Circle
            className='e630b27a-ba98-4499-9549-412f4f34d1c2'
            cx={22.13}
            cy={20.02}
            r={8.57}
          />
        </G>
      </G>
    </Svg>
  );
}

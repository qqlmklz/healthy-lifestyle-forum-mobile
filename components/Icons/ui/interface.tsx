import { withDefaultProps } from '@/components/Icons/lib';
import React from 'react';
import Svg, { Circle, Ellipse, G, Mask } from 'react-native-svg';

export const DefaultAvatar = withDefaultProps(({ size, fill, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 101 100" fill="none" {...props}>
    <Circle cx="50.5" cy="50" r="50" fill="#EBEFF1" />
    <Mask id="mask0_693_6538" maskUnits="userSpaceOnUse" x="0" y="0" width="101" height="100">
      <Circle cx="50.5" cy="50" r="50" fill="#C4C4C4" />
    </Mask>
    <G mask="url(#mask0_693_6538)">
      <Ellipse cx="50.4995" cy="88.0001" rx="38" ry="22" fill="#546E7A" />
    </G>
    <Ellipse cx="50.5005" cy="42.5002" rx="18" ry="18" fill="#546E7A" />
  </Svg>
));

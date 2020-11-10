import React, { useMemo } from 'react';
import styled from 'styled-components';
import * as Outline from '../assets/outline';
const StyledLabel = styled.label`
  font-size: ${({ size }) => size || 1}em;
  font-weight: ${({ weight }) => weight || 500};
  opacity: ${({ opacity }) => opacity || 1};
`;

export function Icon({ icon, className, style }) {
  function renderIcon(_icon) {
    if (!_icon) return null;
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const iconName = _icon
      .split('-')
      .map((x) => capitalize(x))
      .join('');
    const Component = Outline[iconName];
    if (Component) return Component;
    else return null;
  }
  const IconComponent = useMemo(() => renderIcon(icon), [icon]);
  return <IconComponent className={className} style={style} />;
}
export function Label({ text, className, size, bold, semiBold, muted }) {
  return (
    <StyledLabel
      className={className}
      size={size}
      weight={bold ? 700 : semiBold ? 600 : null}
      opacity={muted ? 0.7 : 1}
    >
      {text}
    </StyledLabel>
  );
}

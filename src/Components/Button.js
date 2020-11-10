import styled from 'styled-components';
import Color from 'color';

const types = ['primary'];

export const Button = styled.button.attrs((props) => {
  const type = types[props.type] || types[0];
  const button = props.theme.button[type] || props.theme.button[types[0]];
  return { ...props, button };
})`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: ${({ button }) => button.background};
  color: ${({ button }) => button.color};
  ${'' /* margin: 0; */}
  padding: 0.5em 1.5em 0.5em;
  font-family: 'Alata', sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4em;
  text-align: center;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  border-radius: ${(props) => props.theme.rounded};
  box-shadow: 0 0 0 1px transparent, 0 0 0 0 rgba(34, 36, 38, 0.15);
  user-select: none;
  transition: opacity 0.2s ease, background-color 0.2s ease, color 0.2s ease,
    background 0.2s ease, box-shadow 0.2s ease;
  will-change: '';
  &:hover {
    background: ${({ button }) => Color(button.background).lighten(0.2).hex()}
      none;
    box-shadow: 0 1px 1px 0px #00005529, 0 0 1px 2px #2224260a;
  }
  &:active {
    background: ${({ button }) => button.background} none;
  }
  &:focus {
    outline: none;
  }
`;

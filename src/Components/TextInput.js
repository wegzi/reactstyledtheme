import styled from 'styled-components';
import Color from 'color';


export const TextInput = styled.input.attrs((props) => {
  return { ...props, input: props.theme.input };
})`
  ${'' /* cursor: pointer; */}
  display: inline-block;
  width: 100%;
  min-width: 50px;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: ${({ input }) => input.background};
  color: ${({ input }) => input.color};
  ${'' /* margin: 0; */}
  padding: 0.5em 1em 0.5em;
  ${'' /* font-family: 'Alata', sans-serif; */}
  font-size: 1em;
  font-style: normal;
  ${'' /* font-weight: 400; */}
  line-height: 1.4em;
  text-align: left;
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
    background: ${({ input }) => Color(input.background).lighten(0.2)} none;
    box-shadow: 0 1px 1px 0px #00005529, 0 0 1px 2px #2224260a;
  }
  &:focus {
    background: ${({ input }) => Color(input.background).lighten(0.2)} none;
    box-shadow: 0 1px 1px 0px #00005529, 0 0 1px 2px #2224260a;
  }
  &:active {
    background: ${({ input }) => input.background} none;
  }
`;

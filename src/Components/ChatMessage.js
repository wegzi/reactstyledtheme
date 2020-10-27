import styled from 'styled-components';
 
export const ChatMessage = styled.div.attrs((props) => {
  return { ...props, chatMessage: props.theme.chatMessage };
})`
  ${'' /* cursor: pointer; */}
  width:100%;
  margin-bottom: 0.75rem;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: ${({ chatMessage }) => chatMessage.background};
  color: ${({ chatMessage }) => chatMessage.color};
  ${'' /* margin: 0; */}
  padding: 0.5em 1em 0.5em;
  ${'' /* font-family: 'Alata', sans-serif; */}
  font-size: 1em;
  font-style: normal;
  ${'' /* font-weight: 700; */}
  line-height: 1.4em;
  ${'' /* text-align: center; */}
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  border-radius: ${(props) => props.theme.rounded};
  box-shadow: 0 0 0 1px transparent, 0 0 0 0 rgba(34, 36, 38, 0.15);
  ${'' /* user-select: none; */}
  transition: opacity 0.2s ease, background-color 0.2s ease, color 0.2s ease,
    background 0.2s ease, box-shadow 0.2s ease;
  will-change: '';
  box-shadow: ${props => props.theme.shadowsm};
  &:last-child {
    margin-bottom: 0;
  }
  ${'' /* &:hover {
    background: ${({ chatMessage }) => Color(chatMessage.background).lighten(0.2)} none;
    box-shadow: 0 1px 1px 0px #00005529, 0 0 1px 2px #2224260a;
  }
  &:active {
    background: ${({ chatMessage }) => chatMessage.background} none;
  } */}
`;

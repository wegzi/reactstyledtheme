import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { ChatMessage } from '../ChatMessage';
import { TextInput } from '../TextInput';
import moment from 'moment';
import Collapse from '../Collapse';

const Container = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  background: ${({ isOpen, theme }) =>
    isOpen ? theme.ultralight + 'de' : 'transparent'};
  width: 100%;
`;

export const Section = styled.div`
  box-shadow: ${(props) => props.theme.shadowsm};
  border-radius: ${(props) => props.theme.rounded};
  background-color: ${(props) => props.theme.light};
  padding: 1rem;
  height: 55vh;
  overflow-y: auto;
`;

export function ChatContainer() {
  const [username, setUsername] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [chatMessage, setChatMessages] = useState([
    {
      _id: 'c32040ce-521d-4524-9bb6-6e650e9da4a1',
      username: 'anonymous',
      timestamp: 1603765995919,
      message: 'fw',
    },
    {
      _id: '66438ec2-1ce4-4682-a7fb-5230d2e43034',
      timestamp: 1603765995919,
      username: 'anonymous',
      message: 'fsdfds',
    },
  ]);
  useEffect(() => {
    const connection = new WebSocket('ws://localhost:3333');
    connection.onmessage = (ev) => {
      const { data } = ev;
      const parsedMessage = JSON.parse(data);
      setChatMessages((stMessages) => [...stMessages, parsedMessage]);
    };
    setSocket(connection);
  }, []);
  function onsubmit() {
    if (!message.trim()) return;
    setMessage('');
    socket.send(JSON.stringify({ username, message: message.trim() }));
  }
  return (
    <Container className='px-3 pt-3 rounded-t-xl' isOpen={isOpen}>
      <Button className='mb-3' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'}
      </Button>
      <Collapse isOpen={isOpen}>
        <Section>
          {chatMessage.map((chatMessage) => (
            <ChatMessage key={chatMessage._id}>
              <div
                style={{
                  fontWeight: '600',
                  // color: '#303F9F',
                  fontStyle: 'italic',
                }}
              >
                {chatMessage.username}
              </div>
              {chatMessage.message}
              <br />
              <div
                style={{
                  fontSize: '.75rem',
                  textAlign: 'right',
                  margin: ' -0.3rem -0.7rem',
                  lineHeight: 1,
                }}
              >
                {moment(chatMessage.timestamp).format('hh:mm:ss a')}
              </div>
            </ChatMessage>
          ))}
        </Section>
        <div className='mt-3' style={{ display: 'flex' }}>
          <TextInput
            onChange={(ev) => setMessage(ev.target.value)}
            value={message}
            className='mr-2'
            placeholder='Message'
          />
          <Button onClick={() => onsubmit(message)}>Button</Button>
        </div>
        <TextInput
          placeholder='User name'
          onChange={(ev) => setUsername(ev.target.value)}
          value={username}
          className='mt-3 mb-3'
        />
      </Collapse>
    </Container>
  );
}

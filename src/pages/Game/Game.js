import React, { useState, useContext, useEffect } from 'react';
import { Container, CardContainer, Col, Section } from './styles';
import styled from 'styled-components';
import moment from 'moment';

import { Button } from '../../Components/Button';
// import { Card } from '../../Components/Card';
import { ChatMessage } from '../../Components/ChatMessage';
import { ThemeContext } from '../../context/ThemeState';
import { TextInput } from '../../Components/TextInput';

export default function Game() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
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
  const { switchTheme, isDark } = useContext(ThemeContext);
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
  console.log(chatMessage);
  return (
    <>
      <Button className='mb-2 ml-3 mt-3' onClick={() => switchTheme()}>
        {isDark ? 'Light' : 'Dark'}
      </Button>
      <CardContainer>
        <Col>
          {/* <Card>Mussum ipsum cacilds, vidis litro abertis.</Card> */}
          <TextInput
            onChange={(ev) => setUsername(ev.target.value)}
            value={username}
            className='mr-2'
          />
        </Col>
      </CardContainer>
      <Container>
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
                  margin: ' -0.4rem -0.7rem',
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
          />
          <Button onClick={() => onsubmit(message)}>Button</Button>
        </div>
      </Container>
    </>
  );
}

const Phrase = () => (
  <Paragraph>
    Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra
    lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé
    faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é
    amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti
    palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia
    ce receita de bolis, mais bolis eu num gostis.
  </Paragraph>
);

const Paragraph = styled.p`
  font-size: 1.5em;
  font-family: 'Grenze Gotisch', cursive;
`;

/* <SwitchTransition>
          <CSSTransition
            nodeRef={nodeRef}
            key={isOpen}
            timeout={200}
            classNames='fade'
          >
            <div ref={nodeRef}>
              {isOpen ? (
                <Section>
                  {chatMessage.map((chatMessage) => (
                    <ChatMessage key={chatMessage._id}>
                      Author: {chatMessage.username}
                      <br />
                      {chatMessage.message}
                    </ChatMessage>
                  ))}
                </Section>
              ) : null}
            </div>
          </CSSTransition>
        </SwitchTransition> */

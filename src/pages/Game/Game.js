import React, { useState, useContext } from 'react';
import { Container, CardContainer, Col, Section } from './styles';
import { Button } from '../../Components/Button';
// import { Header } from '../../Components/layout/Header';
import { Card } from '../../Components/Card';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeState';

export default function Game() {
  const [isOpen, setIsOpen] = useState(true);
  const { switchTheme, isDark } = useContext(ThemeContext);
  return (
    <>
      <Button className='mb-2 ml-3 mt-3' onClick={() => switchTheme()}>
        {isDark ? 'Light' : 'Dark'}
      </Button>
      <CardContainer>
        <Col>
          <Card>Mussum ipsum cacilds, vidis litro abertis.</Card>
        </Col>
        <Col>
          <Card>Consetis adipiscings elitis.</Card>
        </Col>
      </CardContainer>
      <Container>
        <Button onClick={() => setIsOpen(!isOpen)}>Button</Button>
        {isOpen ? (
          <Section>
            <Phrase />
          </Section>
        ) : null}
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

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 4px;
  background-color: #eeeeeea1;
  border-radius: 5px;
  overflow: hidden;
`;
const Progress = styled.div`
  width: ${({ value }) => value || 0}%;
  height: 4px;
  background-color: #6a2c70;
`;
export default function ProgressBar({ value, className }) {
  return (
    <Container className={className}>
      <Progress value={value} />
    </Container>
  );
}

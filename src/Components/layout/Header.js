import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  font-family: "Prata", serif;
  top: 0;
  height: ${props => props.theme.headerHeight};
  background-color: ${props => props.theme.primary}a3;
  color: ${props => props.theme.white};
  display: flex;
  align-items: center;
  padding: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  font-style: italic;
`
const Emogi = styled.span`
  font-family: "Cabin", serif;
`

export function Header() {
  return (
    <HeaderContainer>
      Zigzera <Emogi>¯\_(ツ)_/¯</Emogi>
    </HeaderContainer>
  )
}

import styled from "styled-components"

export const Card = styled.div`
  width: 100%;
  height: 100px;
  padding: 0.75rem;
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.rounded};
  box-shadow: ${props => props.theme.shadowsm};
`

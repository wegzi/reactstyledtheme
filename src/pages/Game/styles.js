import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 130%;
  padding: 1rem;
  padding: 1rem;
`
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Col = styled.div`
  padding: 0.875rem;
  flex: 1 0 0;
`
export const Section = styled.div`
  margin-top: 0.875rem;
  box-shadow: ${props => props.theme.shadowsm};
  border-radius: ${props => props.theme.rounded};
  background-color: ${props => props.theme.white};
  padding: 1rem;
`

import styled from "styled-components"

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #060a40;
  
`

export const ImageContainer = styled.div`
  max-height: 90vh;
  width: auto;
  overflow: hidden;
  border-radius: 6px;
  object-fit: cover;
  position: relative;
`

export const AttributionLink = styled.a`
  font-size: 0.8rem;
  position: absolute;
  bottom: 1rem;
  left: 2rem;
`
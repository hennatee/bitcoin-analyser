import styled from "styled-components"

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #060a40;
`

export const HomeContainer = styled.div`
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
  left: 1.5rem;
  color: #1db351;
`

export const Header = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10%;
  top: 25%;
  z-index: 1000;
`

export const AppTitle = styled.h1`
  font-size: 4rem;
  color: #1db351;
  margin-bottom: 0;
  font-family: 'Black Ops One', cursive;
`

export const AppTitle2 = styled.h2`
  font-size: 1.5rem;
  color: #85e882;
  margin-top: 0;
`

export const ButtonCTA = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 30px;
  border: none;
  margin-top: 2rem;
  font-family: 'Electrolize', sans-serif;
  color: #fff;
  background: #ff5f33;
  background: -webkit-gradient(linear, left top, left bottom, from(#ff5f33), to(#b83a1f));
  background: -moz-linear-gradient(top, #ff5f33, #b83a1f);
  background: linear-gradient(to bottom, #ff5f33, #b83a1f);
  box-shadow: #ff582f 0px 0px 20px 0px;
  transition: all .3s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`

//Statistics components

export const StatisticContainer = styled.div`
  padding: 2rem;
  background: #252480;
  border-radius: 10px;
  margin: 2rem;
`

export const DateInput = styled.input`
  width: 200px;
  height: 40px;
  padding-left: 1rem;
  border-radius: 4px;
  border: none;
  margin: 1rem 0;
  font-family: 'Electrolize', sans-serif;
  font-size: 1rem;
`

export const FormLabel = styled.label`
  font-size: 1.2rem;
  color: #fff;
`

export const SubmitButton = styled.button`
  background: #1db351;
  font-family: 'Electrolize', sans-serif;
  font-size: 1rem;
  color: #fff;
  border-radius: 30px;
  border: none;
  width: 120px;
  height: 40px;
  margin-top: 1rem;
`

export const HeadingSm = styled.h3`
  font-size: 1.2rem;
  color: #fff;
`

export const TextSm = styled.p`
  font-size: 1rem;
  color: #fff;
`
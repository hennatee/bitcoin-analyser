import styled from "styled-components"

//Utility components

export const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #0b0c2b;
`

export const Button = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 30px;
  border: none;
  margin-top: 2rem;
  font-size: 1.1rem;
  font-family: 'Electrolize', sans-serif;
  color: #fff;
  background: #e537ff;
  background: -webkit-gradient(linear, left top, left bottom, from(#e537ff), to(#8d22c7));
  background: -moz-linear-gradient(top, #e537ff, #8d22c7);
  background: linear-gradient(to bottom, #e537ff, #8d22c7);
  &.cta-home {
    -webkit-box-shadow: #d332ff 0px 0px 40px 0px;
    -moz-box-shadow: #d332ff 0px 0px 40px 0px;
    box-shadow: #d332ff 0px 0px 40px 0px;
    transition: all .3s ease-in-out;
    &:hover, &:focus {
      transform: scale(1.2);
    }
    @media (max-width: 600px) {
      width: 150px;
      height: 40px;
      margin-top: 1rem;
    }
  }
  &.submit {
    width: 120px;
    height: 40px;
    margin-top: 1rem;
    font-size: 1rem;
    &:hover {
      -webkit-box-shadow: #d332ff 0px 0px 10px 0px;
      -moz-box-shadow: #d332ff 0px 0px 10px 0px;
      box-shadow: #d332ff 0px 0px 10px 0px;
    }
    @media (max-width: 600px) {
      font-size: 0.7rem;
      width: 90px;
      height: 30px;
      margin-top: 0;
    }
  }
`

//Homepage components

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  @media (orientation: portrait) {
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (min-width: 768px) {
      width: 60vw;
    }
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
  @media (orientation: landscape) {
    &.image-sm {
      display: none;
    }
    margin-left: -150px;
    width: auto;
    min-width: 100vw;
  }
  @media (min-width: 768px) {
    margin-left: 0;
  }
  @media (orientation: portrait) {
    height: auto;
    object-fit: contain;
    border-radius: 50%;
    &.image-lg {
      display: none;
    }
  }
`

export const AttributionLink = styled.a`
  font-size: 0.7rem;
  position: fixed;
  bottom: 1rem;
  left: 1.5rem;
  color: #6b9fed;
`

export const Header = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15%;
  bottom: 25%;
  z-index: 1000;
  @media (orientation: portrait) {
    width: 100%;
    height: auto;
    right: 0;
    bottom: 2rem;
    position: relative;
  }
`

export const HeadingLg = styled.h1`
  font-size: 4rem;
  color: #24f9f9;
  margin-bottom: 0;
  font-family: 'Black Ops One', cursive;
  letter-spacing: 0.2em;
  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
    margin-top: 0;
  }
`

export const HeadingMd = styled.h2`
  font-size: 1.5rem;
  color: #24f9f9;
  margin-top: 0;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

//AnalyzerPage components

export const AnalyzerContainer = styled.div`
  padding: 3rem 2rem;
  background: linear-gradient(130deg, rgba(22,26,102,1) 0%, rgba(25,29,109,1) 22%,
  rgba(27,31,115,1) 42%, rgba(29,34,122,1) 63%, rgba(29,34,122,1) 100%, rgba(22,26,102,1) 100%);
  border-radius: 10px;
  margin: 1rem;
  height: 320px;
  width: 230px;
  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: auto;
    padding: 1rem;
    margin: 0.1rem 1rem;
  }
  &.chart {
    width: 500px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 768px) {
      width: 90vw;
      height: auto;
      padding: .5rem;
    }
  }
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
  @media (max-width: 319px) {
    flex-wrap: wrap;
  }
`

export const NotificationText = styled.div`
  color: red;
  font-size: 0.7rem;
  @media (min-width: 600px) {
    margin: 1rem 0;
    font-size: 1rem;
  }
`

export const DateInput = styled.input`
  width: 200px;
  height: 40px;
  padding: 0 1rem;
  border-radius: 4px;
  border: none;
  margin: 1rem 0;
  background-color: #e8e8e8;
  font-family: 'Electrolize', sans-serif;
  font-size: 1rem;
  @media (max-width: 768px) {
    width: 150px;
  }
  @media (max-width: 600px) {
    width: 34vw;
    height: 35px;
    font-size: 0.7rem;
    margin-top: 0.5rem;
    padding: 0 0.5rem;
  }
`

export const FormLabel = styled.label`
  font-size: 1.1rem;
  color: #e8e8e8;
  @media only screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`

export const HeadingSm = styled.h3`
  font-size: 1.1rem;
  color: #e8e8e8;
  font-weight: 400;
  margin-bottom: 0.7rem;
  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  &:first-of-type {
    margin-top: 0;
  }
`

export const TextSm = styled.p`
  font-size: 0.9rem;
  color: #aeb5bf;
  margin-top: 0rem;
  margin-bottom: 1.5rem;
  font-family: "Roboto", sans-serif;
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`
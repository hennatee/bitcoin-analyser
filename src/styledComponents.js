import styled from "styled-components";
import { COLORS, FONTS } from "./theme"; 

//Utility components

export const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${COLORS.background.dark};
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 1rem;
  }
`

export const Button = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 30px;
  border: none;
  margin-top: 2rem;
  font-size: 1.1rem;
  font-family: ${FONTS.primary};
  color: ${COLORS.text.primary};
  background: ${COLORS.accent.purple};
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
      font-size: 0.9rem;
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
  color: ${COLORS.accent.blue};
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
  color: ${COLORS.accent.green};
  margin-bottom: 0;
  font-family: ${FONTS.title};
  letter-spacing: 0.2em;
  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
    margin-top: 0;
    letter-spacing: 0.1em;
  }
`

export const HeadingMd = styled.h2`
  font-size: 1.5rem;
  color: ${COLORS.accent.green};
  margin-top: 0;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

//AnalyzerPage components

export const AnalyzerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem 2rem;
  background: ${COLORS.background.light};
  background: linear-gradient(130deg, rgba(22,26,102,1) 0%, rgba(25,29,109,1) 22%,
  rgba(27,31,115,1) 42%, rgba(29,34,122,1) 63%, rgba(26,30,113,1) 80%, rgba(22,26,102,1) 100%);
  border-radius: 10px;
  margin: 1rem;
  height: 320px;
  width: 230px;
  &.analyzed-data {
    flex-direction: row;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      justify-content: center;
    } 
  }
  @media (max-width: 768px) {
    width: 85vw;
    height: auto;
    margin: 0;
    padding: 2rem 0;
    background: ${COLORS.background.dark};
    &:first-of-type {
      border-bottom: solid 1px ${COLORS.accent.green};
      border-radius: 0;
      padding-bottom: 2rem;
    }
  }
  &.chart {
    width: 500px;
    @media (max-width: 768px) {
      width: 90vw;
      padding: 4rem 0;
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
  color: ${COLORS.text.error};
  font-size: 0.7rem;
  padding: 0 1rem;
  @media (min-width: 600px) {
    margin: 2rem 0;
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
  background-color: ${COLORS.text.primary};
  font-family: ${FONTS.primary};
  font-size: 1rem;
  @media (max-width: 768px) {
    width: 34vw;
    height: 40px;
  }
  @media (max-width: 600px) {
    font-size: 0.7rem;
    margin-top: 0.5rem;
    padding: 0 0.5rem;
  }
`

export const FormLabel = styled.label`
  font-size: 1.1rem;
  color: ${COLORS.text.primary};
  @media only screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`

export const HeadingSm = styled.h3`
  font-size: 1.1rem;
  color: ${COLORS.text.primary};
  font-weight: 400;
  margin-bottom: 0.7rem;
  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  &:first-of-type {
    margin-top: 0;
  }
  &.chart-title {
    font-size: 1.2rem;
  }
`

export const TextSm = styled.p`
  font-size: 0.9rem;
  color: ${COLORS.text.secondary};
  margin-top: 0rem;
  margin-bottom: 1.5rem;
  font-family: ${FONTS.secondary};
  @media (max-width: 768px) {
    min-width: 40vw;
    padding-bottom: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`
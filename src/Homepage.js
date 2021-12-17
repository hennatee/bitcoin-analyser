import { 
  Background, 
  ImageContainer, 
  AttributionLink 
} from "./styledComponents"

const Home = () => {

  const styles = {
    maxWidth: "70vw",
    height: "auto",
    borderRadius: "2%"
    }
  
  const imageUrl = process.env.PUBLIC_URL + '/bitcoin-background.jpg'

  return (
    <Background>
      <ImageContainer>
        <img src={imageUrl} alt="bitcoin-background" style={styles}></img>
        <AttributionLink href="https://www.freepik.com/vectors/technology">Technology vector created by starline - www.freepik.com</AttributionLink>
      </ImageContainer>
      
    </Background>
  )
}

export default Home
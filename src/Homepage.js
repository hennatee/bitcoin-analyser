import { useNavigate } from "react-router"
import { 
  Background, 
  HomeContainer, 
  AttributionLink,
  Header,
  AppTitle,
  AppTitle2,
  ButtonCTA
} from "./styledComponents"

const Home = () => {

  let navigate = useNavigate();

  const handleCtaClick = () => {
    navigate("/analyzer");
  }

  const styles = {
    maxWidth: "70vw",
    height: "auto",
    borderRadius: "2%"
    }
  
  const imageUrl = process.env.PUBLIC_URL + '/bitcoin-background.jpg'

  return (
    <Background>
      <HomeContainer>
        <img src={imageUrl} alt="bitcoin-background" style={styles}></img>
        <AttributionLink 
          href="https://www.freepik.com/vectors/technology">
          Technology vector created by starline - www.freepik.com
        </AttributionLink>
        <Header>
          <AppTitle>Hackacoin</AppTitle>
          <AppTitle2>Bitcoin Analyzer</AppTitle2>
          <ButtonCTA
            onClick={() => handleCtaClick()}>Get Started</ButtonCTA>
        </Header>
      </HomeContainer> 
    </Background>
  )
}

export default Home
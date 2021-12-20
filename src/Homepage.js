import { useNavigate } from "react-router"
import { 
  Background, 
  HomeContainer, 
  AttributionLink,
  Header,
  AppTitle,
  AppTitle2,
  ButtonCTA,
  Image
} from "./styledComponents"

const Home = () => {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/analyzer");
  }
  
  const imageUrl = process.env.PUBLIC_URL + '/bitcoin-background.jpg'

  return (
    <Background>
      <HomeContainer>
        <Image src={imageUrl} alt="bitcoin-background" ></Image>
        <AttributionLink 
          href="https://www.freepik.com/vectors/technology">
          Technology vector created by starline - www.freepik.com
        </AttributionLink>
        <Header>
          <AppTitle>Hackacoin</AppTitle>
          <AppTitle2>Bitcoin Analyzer</AppTitle2>
          <ButtonCTA
            onClick={() => handleClick()}>
            Get Started
          </ButtonCTA>
        </Header>
      </HomeContainer> 
    </Background>
  )
}

export default Home
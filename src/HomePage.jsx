import { useNavigate } from "react-router"
import { 
  Background, 
  HomeContainer, 
  AttributionLink,
  Header,
  HeadingLg,
  HeadingMd,
  Button,
  Image
} from "./styledComponents"

const Home = () => {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/analyzer");
  }
  
  const imageLgUrl = process.env.PUBLIC_URL + "/bitcoin-lg.jpg";
  const imageSmUrl = process.env.PUBLIC_URL + "/bitcoin-sm.jpg";

  return (
    <Background>
      <HomeContainer>
        <Image className="image-lg" src={imageLgUrl} alt="bitcoin-background" ></Image>
        <Image className="image-sm" src={imageSmUrl} alt="bitcoin" ></Image>  
        <Header>
          <HeadingLg>Hackacoin</HeadingLg>
          <HeadingMd>Bitcoin Analyzer</HeadingMd>
          <Button
            className="cta-home"
            onClick={() => handleClick()}>
            Get Started
          </Button>
        </Header>
        <AttributionLink 
          href="https://www.freepik.com/vectors/background">
          Background vector created by starline - www.freepik.com
        </AttributionLink>
      </HomeContainer> 
    </Background>
  )
}

export default Home

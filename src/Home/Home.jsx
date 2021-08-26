import Nav from "../Nav/Nav";
import image from "../img/hls.webp";
import styled from "styled-components";
import device from "../breakpoints";

const Section = styled.section`
  margin: 0 auto;
  max-width: 2000px;
  width: 100%;
  height: auto;
`;
const Title = styled.h1`
  margin: 1em;
  font-weight: 700;
  font-size: 1.5em;
  text-align: center;
`;
const Img = styled.img`
  width: 100%;
  height: 50vh;
  margin: auto;

  @media ${device.tablet} {
    height: 76.8vh;
  }
`;

const Home = () => {
  return (
    <>
      <Nav />
      <Title>React.js application consuming SPACEX API</Title>
      <Section>
        <Img src={image} alt="SpaceX" />
      </Section>
    </>
  );
};

export default Home;

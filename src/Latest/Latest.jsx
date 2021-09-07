import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import styled from "styled-components";
import youtube from '../img/youtube.svg';

const Header = styled.header`
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const Title = styled.h1`
  font-size: 1.6em;
  font-weight: 700;
  text-align: center;
`;

const NameMission = styled.h2`
  font-size: 1.5em;
  font-weight: 400;
  text-align: center;
`;

const Time = styled.time`
  font-size: 1.5em;
  font-weight: 700;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  padding: 1em;
`;

const Paragraph = styled.p`
  font-size: 1.3em;
  font-weight: 400;
  line-height: 1.7;
`;

const Img = styled.img`
  border: 1px solid var(--color-secondary);
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border-color: var(--color-red);
  }
`;

const Latest = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [webCast, setWebCast] = useState("");
  const [details, setDetails] = useState("");
  const [flickr, setFlickr] = useState([]);

  useEffect(() => {
    let ar = [];
    axios
      .get("https://api.spacexdata.com/v4/launches/latest")
      .then((response) => {
        let data = response.data.links.flickr.original;
        data.map((item) => ar.push(item));
        setName(response.data.name);
        setDate(response.data.date_local);
        setDetails(response.data.details);
        setWebCast(response.data.links.webcast);
      });
    setFlickr(ar);
  }, []);

  return (
    <>
      <Nav />
      <Section>
        <Header>
          <Title>Último lanzamiento</Title>
          <NameMission>{name}</NameMission>
          <Time dateTime="2011-11-18T14:54:39.929">{date}</Time>
          <Paragraph>
            Ver video en YouTube
          </Paragraph>
          <a href={webCast} target="_blank" rel="noopener noreferrer">
            <Img loading="lazy" src={youtube} alt="Logo YouTube"></Img>
          </a>
        </Header>
        <Section>
          <Paragraph>{details}</Paragraph>
        </Section>
        <Section>
          {flickr.map((img, index) => (
            <figure key={index}>
              <img loading="lazy" src={img} alt={name} width="250" />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </Section>
      </Section>
    </>
  );
};

export default Latest;

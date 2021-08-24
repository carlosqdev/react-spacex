import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import styled from "styled-components";

const Header = styled.header`
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  /* border: 1px solid red; */
`;

const Title = styled.h1`
  font-size: 1.6em;
  font-weight: 700;
  text-align: center;
  /* margin-top: 1em; */
`;

const NameMission = styled.h2`
  font-size: 1.5em;
  font-weight: 400;
  text-align: center;
  /* margin: 1em 0; */
`;

const Time = styled.time`
  font-size: 1.5em;
  font-weight: 700;
`;

const Latest = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
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
      });
    setFlickr(ar);
  }, []);

  return (
    <>
      <Nav />
      <section>
        <Header>
          <Title>Último lanzamiento</Title>
          <NameMission>{name}</NameMission>
          <Time dateTime="2011-11-18T14:54:39.929">{date}</Time>
        </Header>
        <section>
          <p>{details}</p>
        </section>
        <section>
          {flickr.map((img, index) => (
            <figure key={index}>
              <img
                loading="lazy"
                src={img}
                alt={name}
                width="100"
                height="100"
              />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </section>
      </section>
    </>
  );
};

export default Latest;

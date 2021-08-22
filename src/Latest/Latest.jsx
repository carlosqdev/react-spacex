import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";

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
        <header>
          <h1>Último lanzamiento</h1>
          <h2>{name}</h2>
          <time dateTime="2011-11-18T14:54:39.929">{date}</time>
        </header>
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

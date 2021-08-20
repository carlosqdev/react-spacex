import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [flickr, setFlickr] = useState([]);
  const [details, setDetails] = useState("");

  useEffect(() => {
    let ar = [];
    axios
      .get("https://api.spacexdata.com/v4/launches/latest")
      .then((response) => {
        let result = response.data.links.flickr.original;
        result.map((item) => ar.push(item));
        setDetails(response.data.details);
      });
    setFlickr(ar);
  }, []);

  return (
    <>
      <h1>Consumiendo API de SPACEX</h1>
      <p>{details}</p>
      <section>
        {flickr.map((item, index) => (
          <img
            loading="lazy"
            key={index}
            width="100px"
            height="100px"
            src={item}
            alt="test"
          />
        ))}
      </section>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";

const Catquote = () => {
  const CAT_FACT_URL = "https://catfact.ninja/fact";
  const [loading, setLoading] = useState(false);
  const [fact, setFact] = useState("Loading...");
  
  useEffect(() => {
    fetch(CAT_FACT_URL)
      .then((response) => response.json())
      .then((body) => {
        console.log(body["fact"]);
        setFact(body["fact"]);
      });
  }, [loading]);

  return (
    <div>
      Random cat fact:
      <div>{fact}</div>
    </div>
  );
};

export default Catquote;

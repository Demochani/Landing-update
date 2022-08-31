import React, { useState, useEffect, useMemo } from "react";

const CurrentTemp = () => {
  const [tempr, setTempr] = useState();
  useEffect(() => {
    console.log("loltemp");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=50.43&lon=30.52&appid=b4adf124a9b6052ebd73d99f6a9dbb74`
    )
      .then((response) => response.json())
      .then((tempr) => {
        setTempr(tempr);
        document.querySelector(".temp").innerHTML =
          "Current temperature is : " +
          Math.round(tempr.main.temp - 273) +
          "&deg;";
      })
      .finally((error) => error);
  }, []);

  return (
    <div className="tempWrap">
      <strong>Stay Always tune with the Wu Tang Clan</strong>
      <h1 className="temp"></h1>
    </div>
  );
};

export default CurrentTemp;

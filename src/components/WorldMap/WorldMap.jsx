import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { fetchCountriesForMap } from "../../api";

const WorldMap = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      const countries = await fetchCountriesForMap();

      setCountries(countries);
      console.log(countries);
    };
    fetchMyAPI();
  }, []);

  const locations = countries.map((data, i) => {
    return (
      <div
        lat={data.countryInfo.lat}
        lng={data.countryInfo.long}
        style={{
          color: "black",
          backgroundColor: "rgba(255,255,255,0.5)",
          height: "95px",
          width: "130px",
          textAlign: "center",
          borderRadius: "30%",
          fontSize: "0.9rem",
        }}
      >
        <img height="15px" src={data.countryInfo.flag} />
        <br />
        today cases: {data.todayCases}
        <br />
        today deaths: {data.todayDeaths}
        <br />
        today recovered: {data.todayRecovered}
      </div>
    );
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAxc3Cw1TghlGAZlTqM8fK_UFoymj6DMig" }}
        defaultCenter={{ lat: 41.8333, lng: 22 }}
        defaultZoom={7}
      >
        {locations}
      </GoogleMapReact>
    </div>
  );
};

export default WorldMap;

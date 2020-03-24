import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryResults from "./CountryResults";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      const countriesList = await axios.get(
        "https://covid19.mathdro.id/api/countries"
      );
      setCountries(countriesList.data.countries);
    };
    getCountries();
  }, []);

  useEffect(() => {
    const getCountry = async () => {
      const response = await axios.get("https://extreme-ip-lookup.com/json/");
      setSelectedCountry(response.data.country);
    };

    getCountry();
  }, []);

  return (
    <div className="col">
      <CountryResults country={selectedCountry} />
      <div className="input-group">
        <select
          className="custom-select"
          value={selectedCountry}
          onChange={e => {
            setSelectedCountry(e.target.value);
          }}
        >
          {countries.map(country => (
            <option key={country["name"]} value={country["name"]}>
              {country["name"]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Countries;

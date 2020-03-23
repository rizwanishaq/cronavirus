import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryResults({ country }) {
  const [state, setState] = useState({
    confirmed: "",
    recovered: "",
    deaths: ""
  });
  useEffect(() => {
    const getInformation = async () => {
      try {
        const response = await axios.get(
          `https://covid19.mathdro.id/api/countries/${country}`
        );
        setState({
          confirmed: response.data.confirmed.value,
          deaths: response.data.deaths.value,
          recovered: response.data.recovered.value
        });
      } catch (err) {
        setState({
          confirmed: "",
          deaths: "",
          recovered: ""
        });
      }
    };
    getInformation();
  }, [country]);
  return (
    <div className="card">
      <div className="card-header">{country}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-warning">
          Confirmed: {state.confirmed}{" "}
        </li>
        <li className="list-group-item text-danger">Deaths: {state.deaths} </li>
        <li className="list-group-item text-success">
          Recovered: {state.recovered}{" "}
        </li>
      </ul>
    </div>
  );
}

export default CountryResults;

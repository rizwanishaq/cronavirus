import React, { useState, useEffect } from "react";
import axios from "axios";

function WorldWide() {
  const [state, setState] = useState({
    confirmed: "",
    recovered: "",
    deaths: ""
  });

  useEffect(() => {
    const getInformation = async () => {
      const response = await axios.get("https://covid19.mathdro.id/api");
      setState({
        confirmed: response.data.confirmed.value,
        deaths: response.data.deaths.value,
        recovered: response.data.recovered.value
      });
    };
    getInformation();
  }, []);
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">Global</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-warning">
            Confirmed: {state.confirmed}{" "}
          </li>
          <li className="list-group-item text-danger">
            Deaths: {state.deaths}{" "}
          </li>
          <li className="list-group-item text-success">
            Recovered: {state.recovered}{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorldWide;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function Navbar() {
  const [date, setDate] = useState();
  useEffect(() => {
    const getInformation = async () => {
      try {
        const response = await axios.get(`https://covid19.mathdro.id/api/`);
        setDate(response.data.lastUpdate);
      } catch (err) {
        setDate("");
      }
    };
    getInformation();
  }, []);
  return (
    <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
      <Link to="/">
        <img
          src={"http://pngimg.com/uploads/coronavirus/coronavirus_PNG46.png"}
          width={"45"}
          alt={""}
          className="d-inline-block align-middle mr-2"
        />
      </Link>
      <span className="text-white mr-sm-2">
        Last-Update {moment(date).format("DD/MM/YYYY, h:mm:ss a")}
      </span>
    </nav>
  );
}

export default Navbar;

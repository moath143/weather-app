import React, { useEffect, useState } from "react";
import { state } from "./recoilState";
import { useRecoilState } from "recoil";
import axios from "axios";

function Country() {
  const [data, setData] = useRecoilState(state);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const api = `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=ddbc3714abf3ddcf0b962731fa9fdd0e`;
  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setData(res.data.list);
        setCity(res.data.city.country);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  function nameCountry(e) {
    setCountry(e.target.value);
  }
  return (
    <div className="center">
      <h3>
        {" "}
        {country} {city}{" "}
      </h3>
      <ol>
        <li>
          <button value={"jerusalem"} onClick={nameCountry}>
            jerusalem
          </button>
        </li>
        <li>
          <button value={"Beirut"} onClick={nameCountry}>
            Beirut
          </button>
        </li>
        <li>
          <button value={"tunis"} onClick={nameCountry}>
            tunis
          </button>
        </li>
        <li>
          <button value={"Amman"} onClick={nameCountry}>
            Amman
          </button>
        </li>
        <li>
          <button value={"Cairo"} onClick={nameCountry}>
            Cairo
          </button>
        </li>
        <li>
          <button value={"Algeria"} onClick={nameCountry}>
            Algeria
          </button>
        </li>
        <li>
          <button value={"Athena"} onClick={nameCountry}>
            Athena
          </button>
        </li>
        <li>
          <button value={"New York"} onClick={nameCountry}>
            New York
          </button>
        </li>
        <li>
          <button value={"Gaza"} onClick={nameCountry}>
            Gaza
          </button>
        </li>
      </ol>
    </div>
  );
}

export default Country;

import React from "react";
import { selector, useRecoilValue } from "recoil";
import { state } from "./recoilState";

const weatherData = selector({
  key: "weatherData",
  get: ({ get }) => {
    const data = get(state);
    return data;
  },
});
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function Weather() {
  const listArr = useRecoilValue(weatherData);

  let newArr = [];
  let newDays = [];
  listArr.map((el) => {
    let item = el.dt_txt.split(" ");
    if (item[1] === "06:00:00") {
      newArr.push(el);
      let d = new Date(item[0]);
      let dayName = days[d.getDay()];
      newDays.push(dayName);
    }
  });

  let result = {
    date: "",
    day: "",
  };
  let resultArr = [];

  newArr.map((element, index) => {
    result = {
      date: element,
      day: newDays[index],
    };
    resultArr.push(result);
  });
  let data = resultArr.map((element, index) => {
    console.log(element);
    return (
      <>
        <div key={index} className="card">
          <p> {element.day} </p>
          <p>{element.date.dt_txt.split(" ")[0]}</p>
          <div className="icon">
            <img
              src={`http://openweathermap.org/img/w/${element.date.weather[0].icon}.png`}
              alt=""
            />
          </div>
          <h3>{element.date.main.temp} F</h3>
          <p>{element.date.weather[0].description}</p>
        </div>
      </>
    );
  });

  return (
    <div className="weather_app_style">
      <div className="weather">{data}</div>
    </div>
  );
}

export default Weather;

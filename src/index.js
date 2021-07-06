import React from "react";
import ReactDOM from "react-dom";

import "index.scss";
import Application from "components/Application";

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];



ReactDOM.render(<Application days={days}/>, document.getElementById("root"));

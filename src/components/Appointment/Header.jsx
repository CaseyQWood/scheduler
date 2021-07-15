import React from "react";

/*
Time slot header component hook:

  Parent: Index.jsx
  Children: None
  
  Generates the JSX to display the time separators between appointment slots.

  Props:
  - time  [required]  <String>  Time slot of the day  
  
  Use: 
  - <Header time={<source>}/> 
*/

export default function Header(props) {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
}

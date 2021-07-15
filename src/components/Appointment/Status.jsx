import React from "react";

/*
Loading screen component hook:

  Parent: Index.jsx
  Children: None
 
  Generates the JSX to display the loading icon for async actions

  Props:
  - currentInterviewer  [required]  <String> changes on what is loading (saving or deleting)

  Use: 
  - <Status message={<source>}/> 
*/

export default function Status(props) {
  return (
    <main className="appointment__card appointment__card--status">
      <img
        className="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold">{props.message}</h1>
    </main>
  );
}

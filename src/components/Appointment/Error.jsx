import React from "react";

/*
Error message component hook:

  Parent: Index.jsx
  Children: None
 
  Generates the JSX for when there is a error returned from a async function

  Props:
  - message  [required]  <String>   message to be displayed when error occurs  
  - onClose  [required]  <Function>  returns client back two transitions to component before the loading screen and the error screen 

  Use: 
  - <Error message={<source>} onClose={<source>}/>
*/

export default function Error(props) {
  return (
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{props.message}</h3>
      </section>
      <img
        className="appointment__error-close"
        src="images/close.png"
        alt="Close"
        onClick={() => props.onClose()}
      />
    </main>
  );
}

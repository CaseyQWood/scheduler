import React from 'react'

/*
Empty appointment hook:

  Parent: Index.jsx
  Children: None
  
  Generates the JSX to display the icon to display no appointment is booked for that time and to direct client to create form

  Props:
  - onAdd  [required]  <Function>  function that calls transition(CREATE) from the parent

  Use: 
  - <Empty onAdd={() => <source>} /> 
*/

export default function Empty(props) {

  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  )
}
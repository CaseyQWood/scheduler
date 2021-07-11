import React from 'react'

/*
Appointment component hook:

  Parent: Index.jsx
  Children: None

  Generates the JSX to display booked appointment info with options to cancel apt or edit it

  Props:
  - aptId      [required]  <Integer>   Unique id for specific appointment
  - interview  [required]  <Object>    If there is a booked interview includes values if not will be NULL
  - onDelete   [required]  <Function>  Call to remove appointment from state and DB, arguments: (aptId)
  - onCreate   [required]  <Function>  Call to add appointment to state and DB


  Props Objects Values:
  -interview { student, interviewer{id, name, avatar}}

  Use: 
  - <Show
        interview={<source>}
        aptId={<source>}
        onDelete={() => <source>}
        onEdit={() => <source>}
      /> 
*/

export default function Show(props) {
  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        { !props.interview ? null : ( 
          <h2 className="text--regular">{props.interview.student}</h2>
        ) }
        <section className="interviewer">
          <h4 className="text--light">Interviewer</h4>
          <h3 className="text--regular">{props.interview ? props.interview.interviewer.name : null}</h3>
        </section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <img
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={props.onEdit}
          />
          <img
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={() => props.onDelete(props.aptId)}
          />
        </section>
      </section>
    </main>
  )
}
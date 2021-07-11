import React from 'react'
import Button from '../Button'

/*
Delete appointment component hook:

  Parent: index.jsx
  Children: Button.jsx
  
  Generates the JSX to display confirmation message before deleting appointment

  Props:
  - aptId     [required]  <Integer>   specific appointment ID
  - message   [required]  <String>    message to be displayed 
  - onDelete  [required]  <Function>  handles final check before deleting appointment from state and DB
  - onCancel  [required]  <Function>  transitions to the last rendered component

  Use: 
  - <Confirm 
      message={<source>} 
      onDelete={<source>} 
      aptId={<source>} 
      onCancel={() => {<source>}}
    /> 
*/

export default function Confirm(props) {
  console.log(props)

  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        <Button onClick={props.onCancel} danger>Cancel</Button>
        <Button onClick={() => props.onDelete(props.aptId)} danger>Confirm</Button>
      </section>
    </main>
  )
}
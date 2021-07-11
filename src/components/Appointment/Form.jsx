import React from 'react'
import Button from '../Button'
import InterviewerList from 'components/InterviewerList'
import { useState } from "react";

/*
Form component hook:

  Parent: Index.jsx
  Children: 
  - Header.jsx
  - Empty.jsx
  - Show.jsx
  - Status.jsx
  - Form.jsx
  - Error.jsx
  
  Generates the JSX to display the form component with input box, buttons, optional interviewers

  Props:
  - currentInterviewer  [optional]  <Object> if form load from edit includes the selected interviewer
  - studentName         [optional]  <String>  if form loaded from edit button will include the name of the student 
  - editBoolean         [optional]  <Boolean>  is true if user is accessing form through edit button
  - interviewers        [required]  <Array>  List of available interviewers for that day with their key/values ({id, name, avatar})
  - onBack              [required]  <Function>  When user hits cancel renders the last component for that spot
  - onSave              [required]  <Function>  updates state and DB when deleting interview, arguments -> (id)


  Use: 
  - <Form 
      editBoolean={<source>} 
      onSave={<source>} 
      onBack={<source>} 
      interviewers={<source>} 
      studentName={<source> ? <source>.student : null} 
      currentInterviewer={<source> ? <source>.interviewer : null}
    /> 
*/

export default function Form(props) {
  console.log('props', props)
  const [userName, setName] = useState(props.studentName ? props.studentName : '')
  const [interviewer, setInterviewer] = useState(props.currentInterviewer ? props.currentInterviewer.id : null)

  //when Save button is clicked it resets the values in the input field
  function reset(){ 
    setName('');
    setInterviewer(null) 
  }
  function cancel() {
    reset()
    props.onBack()
  }

  const save = () => {
    props.onSave(userName, interviewer, props.editBoolean)
  }  

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form id='myForm' autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            type="text"
            placeholder="Enter Student Name"
            value={userName}

            // this updates the value of userName by pulling it every time a change happens
            //the value needed is inside the event.target.value
            onChange={event => {setName(event.target.value)}}

          />
          Student
        </form>
        <InterviewerList interviewers={props.interviewers} selectedInterviewer={interviewer} setInterviewer={setInterviewer}/>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={save} >Save</Button>
        </section>
      </section>
    </main>
  )
}
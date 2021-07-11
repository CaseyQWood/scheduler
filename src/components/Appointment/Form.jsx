import React from 'react'
import Button from '../Button'
import InterviewerList from 'components/InterviewerList'
import { useState } from "react";

export default function Form(props) {
  // manages state for the input box (NAME)
  const [userName, setName] = useState(props.studentName ? props.studentName : '')
  // manages state for the chosen interviewer
  const [interviewer, setInterviewer] = useState(props.currentInterviewer ? props.currentInterviewer.id : null)

  //when Save button is clicked it resets the values int he input field
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
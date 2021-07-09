import React from 'react'
import Button from '../Button'
import InterviewerList from 'components/InterviewerList'
import { useState } from "react";

export default function From(props) {
  const [userInput, setInput] = useState('')
  const [interviewer, setInterviewer] = useState(props.interviewer || null)

  function reset(){ 
    props.onSave(userInput)
    setInput('');
    setInterviewer(null) 
  }

  function cancel() {
    setInput('');
    setInterviewer(null) 
    props.onCancel()
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form id='myForm' autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name={props.name}
            type="text"
            placeholder="Enter Student Name"
            value={userInput}

            // this updates the value of userInput by pulling it every time a change happens
            //the value needed is inside the event.target.value
            onChange={event => {setInput(event.target.value)}}

          />
        </form>
        <InterviewerList interviewers={props.interviewers} selectedInterviewer={interviewer} setInterviewer={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={reset} >Save</Button>
        </section>
      </section>
    </main>
  )
}
import React from 'react'
import Button from '../Button'
import InterviewerList from 'components/InterviewerList'
import { useState } from "react";

export default function From(props) {
  const [userInput, setInput] = useState('')
  const [interviewer, setInterviewer] = useState('')


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name={props.name}
            type="text"
            placeholder="Enter Student Name"
            value={userInput}
            onChange={event => {setInput(event.target.value)}}
            /*
              This must be a controlled component
            */
          />
        </form>
        <InterviewerList interviewers={props.interviewers} selectedInterviewer={interviewer} setInterviewer={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onCancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  )
}
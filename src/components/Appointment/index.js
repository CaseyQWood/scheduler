import React from "react";
import './styles.scss'
import Header from './Header'
import Show from './Show'
import Empty from './Empty'
import useVisualMode from "hooks/useVisualMode";
import Form from './Form'
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = 'CREATE'



export default function Appointment(props) {
  console.log('chace',props.time )
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    const interview = {
      interviewer,
      student: name
    }
    props.bookInterview(props.id, interview)
    transition(SHOW)
  };

  return(
  <article className="appointment">
    <Header time={props.time}/>
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
        interview={props.interview}
        aptId={props.id}
        // interviewer={props.interview.interviewer.name}
      />
    )}
    {mode === CREATE && <Form onSave={save} onBack={back} interviewers={props.interviewers ? props.interviewers : []}/>}
  </article>
  )
}
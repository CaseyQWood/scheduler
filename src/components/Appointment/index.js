import React from "react";
import './styles.scss'
import Header from './Header'
import Show from './Show'
import Empty from './Empty'
import useVisualMode from "hooks/useVisualMode";
import Form from './Form'
import Status from './Status'
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = 'CREATE'
const SAVING = 'SAVING'



export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    
    const interview = {
      interviewer,
      student: name
    }
    transition(SAVING)

    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
  
  };

  const deleteApt = (id) => {
    transition(SAVING)
    props.deleteInterview(id)
    .then(() => {transition(EMPTY)})
    
  }

  return(
  <article className="appointment">
    <Header time={props.time}/>
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
        interview={props.interview}
        aptId={props.id}
        onDelete={deleteApt}
      />
    )}
    {mode === SAVING && <Status/>} 
    {mode === CREATE && <Form onSave={save} onBack={back} interviewers={props.interviewers ? props.interviewers : []}/>}
    
  </article>
  )
}
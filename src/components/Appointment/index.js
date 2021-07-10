import React from "react";
import './styles.scss'
import Header from './Header'
import Show from './Show'
import Empty from './Empty'
import useVisualMode from "hooks/useVisualMode";
import Form from './Form'
import Status from './Status'
import Confirm from './Confirm'
import Error from './Error'
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = 'CREATE'
const SAVING = 'SAVING'
const CONFIRM = 'CONFIRM'
const EDIT = 'EDIT'
const ERROR_SAVE = 'ERROR_SAVE'
const ERROR_DELETE = 'ERROR_DELETE'



export default function Appointment(props) {
  console.log(props.interview)
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    const interview = {
      interviewer,
      student: name
    }
    transition(SAVING )

    props.bookInterview(props.id, interview)
    .then(res => res ? transition(SHOW) : null)
    .catch(error => transition(ERROR_SAVE, true))
  
  };

  const deleteApt = (id) => {
    transition(SAVING, true)

    props.deleteInterview(id)
    .then(() => {transition(EMPTY)})
    .catch(() => transition(ERROR_DELETE, true))
  }


  return(
  <article className="appointment">
    <Header time={props.time}/>
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
        interview={props.interview}
        aptId={props.id}
        onDelete={() => transition(CONFIRM)}
        onEdit={() => transition(EDIT)}
      />
    )}
    {mode === SAVING && <Status/>}
    {mode === CONFIRM && <Confirm message={'would you like to delete this appointment ?'} onDelete={deleteApt} aptId={props.id} onCancel={() => {back()}}/>}
    {mode === CREATE && <Form onSave={save} onBack={back} interviewers={props.interviewers ? props.interviewers : []}/>}
    {mode === EDIT && <Form onSave={save} onBack={back} interviewers={props.interviewers ? props.interviewers : []} studentName={props.interview ? props.interview.student : null} currentInterviewer={props.interview ? props.interview.interviewer : null}/>}
    {mode === ERROR_SAVE && <Error message={'Sorry, unable to save appointment'} onClose={back}/>}
    {mode === ERROR_DELETE && <Error message={'Sorry, unable to delete appointment'} onClose={back}/>}
  </article>
  )
}
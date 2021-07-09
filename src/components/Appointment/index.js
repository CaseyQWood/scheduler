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
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
//  console.log('check for id ',props)
  const save = (name, interviewer) => {
    const interview = {
      interviewer,
      student: name
    }
    props.bookInterview(props.id, interview)
    // props.bookInterview(...Object.values(interview))
    console.log('save result',props.id ,interview)
  };

  return(
  <article className="appointment">
    <Header time={props.time}/>
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
      />
    )}
    {mode === CREATE && <Form save={save} onBack={back} interviewers={props.interviewers ? props.interviewers : []}/>}
  </article>
  )
}
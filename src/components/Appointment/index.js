import React from "react";
import './styles.scss'
import Header from './Header'
import Show from './Show'
import Empty from './Empty'
import useVisualMode from "hooks/useVisualMode";
import Form from './Form'
import getInterviewerForDay from '../../helpers/selectors'
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = 'CREATE'



export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

console.log('test',props)
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
    {mode === CREATE && <Form onBack={back} interviewers={props.interviewers ? props.interviewers : []}/>}
  </article>
  )
}
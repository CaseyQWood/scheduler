import React from "react";
import './styles.scss'
import Header from './Header'
import Show from './Show'
import Empty from './Empty'
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  // console.log('this is props', props.interview.interviewer.name)
  return(
  <article className="appointment">
    <Header time={props.time}/>
    {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer.name}/> : <Empty/>}
  </article>
  )
}
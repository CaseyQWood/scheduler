import React from "react";
import 'components/InterviewListItem.scss'
import classnames from 'classnames'

/*
Interviewer list Item creation hook:

  Parent: interviewerList.jsx
  Children: None
  
  Generates the JSX to display icon and styles for individual interviewers to the form.

  Props:
  - name:           [required]  <String>    name of interviewer
  - avatar:         [required]  <Url>       Icon for the interviewer
  - selected:       [required]  <Boolean>   Declares that interviewer as selected in the form 
  - setInterviewer  [required]  <Function>  Set the state for selected interviewer

  Use: 
  - <InterviewListItem 
      key={person.id}
      name={person.name}
      avatar={person.avatar}
      selected={props.selectedInterviewer === person.id}
      setInterviewer={() => {props.setInterviewer(person.id)}}
    />
*/

export default function interviewListItem(props) {
  console.log('comments',props)

  const className = classnames(
    "interviewers__item",
    {'interviewers__item--selected': props.selected
  })

  return (
  <li className={className} onClick={props.setInterviewer}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
    {props.selected && props.name}
  </li>
  )
}
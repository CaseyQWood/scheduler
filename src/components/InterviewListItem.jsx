import React from "react";
import 'components/InterviewListItem.scss'
import classnames from 'classnames'

export default function interviewListItem(props) {

  const className = classnames(
    "interviewers__item",
    {'interviewers__item--selected': props.selected
  })

  return (
  <li className={className} onClick={() => {props.setInterviewer(props.id) }}>
    <img
      key={props.id}
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
    {props.selected && props.name}
  </li>
  )
}
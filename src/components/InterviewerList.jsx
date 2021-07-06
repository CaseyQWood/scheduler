import React from 'react'
import InterviewListItem from './InterviewListItem'
import "components/InterviewerList.scss"


export default function interviewerList(props) {

  const listOfInterviewers = props.interviewers.map(
    (person) => { 
      return (
        <InterviewListItem 
        key={person.id}
        id={person.id}
        name={person.name}
        avatar={person.avatar}
        selected={person.id === props.interviewer}
        seInterviewer={person.setInterviewer}
        />
      )
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listOfInterviewers}</ul>
    </section>
  )
}
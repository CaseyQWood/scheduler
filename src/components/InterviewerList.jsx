import React from 'react'
import InterviewListItem from './InterviewListItem'
import "components/InterviewerList.scss"


export default function interviewerList(props) {

  const listOfInterviewers = props.interviewers.map(
    (person) => { 
      return (
        <InterviewListItem 
        key={person.id}
        name={person.name}
        avatar={person.avatar}
        selected={props.selectedInterviewer === person.id}
        setInterviewer={() => {props.setInterviewer(person.id)}}
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
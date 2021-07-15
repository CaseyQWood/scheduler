import React from "react";
import InterviewListItem from "./InterviewListItem";
import "components/InterviewerList.scss";
import PropTypes from "prop-types";

/*
Interviewer list creation hook:

  Parent: /appointments/Form.jsx
  Children: /InterviewListItem.jsx
  
  Generates the JSX to display the list of interviewers available to select.

  Props:
  - interviewers:        [required]  <Array>     Objects for each of the interviewers values (id, name, avatar)
  - selectedInterviewer: [required]  <Integer>   Id of selected interviewer
  - setInterviewer       [required]  <Function>  Set the state for selected interviewer

  Use: 
  -  <InterviewerList interviewers={<source>} selectedInterviewer={<source>} setInterviewer={<source>} currentInterviewer={<source>}/>

*/

function interviewerList(props) {
  const listOfInterviewers = props.interviewers.map((person) => {
    return (
      <InterviewListItem
        key={person.id}
        name={person.name}
        avatar={person.avatar}
        selected={props.selectedInterviewer === person.id}
        setInterviewer={() => {
          props.setInterviewer(person.id);
        }}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listOfInterviewers}</ul>
    </section>
  );
}

interviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default interviewerList;

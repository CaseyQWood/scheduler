import React from "react";
import DayList from "./DayList";
import Appointment from './Appointment/index'
import { getAppointmentsForDay, getInterview, getInterviewerForDay } from "helpers/selectors";
import useApplicationData from '../hooks/applicationData'
import "components/Application.scss";

export default function Application() {
  const {
    state,
    setDay,
    bookInterview,
    deleteInterview
  } = useApplicationData();


 // these functions grab the appointments and the interviewers for that day once its selected from the list of days
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewerForDay(state, state.day)
  
// maps out the appointment list 
  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview)
    return (
      <>
        <Appointment 
          key={appointment.id}
          id={appointment.id}
          time={appointment.time}
          interview={interview}
          interviewers={dailyInterviewers}
          bookInterview={bookInterview}
          deleteInterview={deleteInterview}
        /> 
      </>
    )
  })

  return (
    <main className="layout">
      <section className="sidebar">
        {<><img
            className="sidebar--centered"
            src="images/logo.png"
            alt="Interview Scheduler"
          />
          <hr className="sidebar__separator sidebar--centered" />
            <DayList
              days={state.days}
              day={state.day}
              setDay={setDay}
            />
          <nav className="sidebar__menu"></nav>
          <img
            className="sidebar__lhl sidebar--centered"
            src="images/lhl.png"
            alt="Lighthouse Labs"
          /></>}
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

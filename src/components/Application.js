import React from "react";
import DayList from "./DayList";
import { useState, useEffect } from "react";
import Appointment from './Appointment/index'
import axios from "axios";
import { getAppointmentsForDay, getInterview, getInterviewerForDay } from "helpers/selectors";

import "components/Application.scss";

const urlDays = 'http://localhost:8001/api/days'
const urlAppointments = 'http://localhost:8001/api/appointments'
const urlInterviewers = 'http://localhost:8001/api/interviewers'

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
    interview: {
      student: "Geoff",
      interviewer: {
        id: 2,
        name: "Obama",
        avatar: "https://i.imgur.com/T2WwVfS.png",
      }
    }
  }
];

const daysApi = () => {
  return axios(urlDays)
  .then((results) => {
    return results
  })
}
const appointmentsApi = () => {
  return axios(urlAppointments)
  .then((results) => {
    return results
  })
}
const interviewersApi = () => {
  return axios(urlInterviewers)
  .then((results) => {
    return results
  })
}

export default function Application() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: appointments,
    interviewers: {}
  });

  const setDay = day => setState(prev => ({ ...prev, day }));
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
        /> 
      </>
    )
  })

// runs a call to each of the DB and then assigns all the values of days,appointments and interviewers to state
  useEffect(() => {
    Promise.all([daysApi(), appointmentsApi(), interviewersApi()])
    .then((results) => {
      setState(prev => ({...prev, days: results[0].data, appointments: Object.values(results[1].data), interviewers: results[2].data}))
    })
  }, [])
  
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

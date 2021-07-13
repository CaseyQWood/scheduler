import {React, useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react';


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

const urlDays = 'http://localhost:8001/api/days'
const urlAppointments = 'http://localhost:8001/api/appointments'
const urlInterviewers = 'http://localhost:8001/api/interviewers'

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


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: appointments,
    interviewers: {}
  });

  const setDay = day => setState(prev => ({ ...prev, day }));

  const bookInterview = (id, interview, update) => {
    const index = state.days.findIndex(day => day.name === state.day)
    const newCount = update ? state.days[index].spots : state.days[index].spots - 1
    let newData = state.days
    newData[index].spots = newCount

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    console.log("BEFORE: ", state.days[0].spots)

    return axios.put(`http://localhost:8001/api/appointments/${id}`, appointment)
    .then((res) => {
    setState({...state, appointments, days: state.days})
    console.log("AFTER: ", state.days[0].spots)

    })
    

  };

  const deleteInterview = (id) => {
  // each day has appointment id's (state.days)

    const index = state.days.findIndex(day => day.name === state.day)
    const newCount = state.days[index].spots + 1
    let newData = state.days
    newData[index].spots = newCount

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios.delete(`http://localhost:8001/api/appointments/${id}`)
    .then(() => {
      setState({...state, appointments, days: newData})
    })  
  };

  useEffect(() => {
    Promise.all([daysApi(), appointmentsApi(), interviewersApi()])
    .then((results) => {
      setState(prev => ({...prev, days: results[0].data, appointments: results[1].data, interviewers: results[2].data}))
    })
  }, [])

  return {state, deleteInterview, bookInterview, setDay}
}
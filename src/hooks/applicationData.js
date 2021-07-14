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
  return axios.get(urlDays)
  .then((results) => {
    return results
  })
}
const appointmentsApi = () => {
  return axios.get(urlAppointments)
  .then((results) => {
    return results
  })
}
const interviewersApi = () => {
  return axios.get(urlInterviewers)
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

    const day = update ? {
      ...state.days[index],
      spots: state.days[index].spots
    } : {
      ...state.days[index],
      spots: state.days[index].spots - 1
    }

    let days = [...state.days];
    days[index] =day


    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
   
    return axios.put(`http://localhost:8001/api/appointments/${id}`, appointment)
    .then((res) => {
    setState({...state, appointments, days: days})
    console.log("LATER: ", state.days[0].spots)

    })
    
  };

  const deleteInterview = (id) => {
    const index = state.days.findIndex(day => day.name === state.day)

    const day = {
      ...state.days[index],
      spots: state.days[index].spots + 1
    }

    let days = [...state.days];
    days[index] = day
   
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
      setState({...state, appointments, days: days})
      console.log("AFTER4: ", state.days[0].spots)

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
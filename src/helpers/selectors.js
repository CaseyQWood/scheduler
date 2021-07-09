export function getAppointmentsForDay(state, day) {
  let selectedDay = []
  for (const index in state.days) {
    if (state.days[index].name === day) {
      selectedDay = state.days[index].appointments
    }
  }

  let testArray = []
  selectedDay.forEach(elementId => {
    testArray.push(state.appointments[elementId])
  });

  return testArray
}


export function getInterview(state, interview) {
  if(!interview) return null
  return {...interview, interviewer: state.interviewers[interview.interviewer]}
}
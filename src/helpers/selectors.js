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

export function getInterviewerForDay(state, day) {
  let selectedInterviewer = []
  // console.log(interviewer)

  for (const index in state.days) {
    // console.log('test',state.days[index])
    if (state.days[index].name === day) {
      selectedInterviewer = state.days[index].interviewers
      // selectedInterviewer = state.interviewer[index].appointments
    }
  }

  let testArray = []
  selectedInterviewer.forEach(elementId => {
    testArray.push(state.interviewers[elementId])
  });

  // console.log(testArray)
  return testArray 
}
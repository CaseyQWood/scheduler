export function getAppointmentsForDay(state, day) {
  console.log('THIS IS THE STATE', state)
  console.log('this is state', state)
  let selectedDay = []
  for (const index in state.days) {
    if (state.days[index].name === day) {
      selectedDay = state.days[index].appointments
    }
  }

  let testArray = []
  selectedDay.forEach(elementId => {
    if (state.appointments[elementId]) {
      testArray.push(state.appointments[elementId])
    }
    
  });
  console.log('this is test array', testArray)
  return testArray
  // ... returns an array of appointments for that day
  // let appointments;
  // let result;
  // if (state.days.length === 0) {
  //   result = [];
  // } else {
  //   for (let x of state.days) {
  //     if (x.name === day) {
  //       appointments = x.appointments;
  //       result = appointments.map (key => state.appointments[key]);
  //       console.log('result: ', result);
  //       break;
  //     } else {
  //       result = [];
  //     }
  //   }
  // }
  // console.log('this is a freaking tester',result)
  // return result;
}


export function getInterview(state, interview) {
  if(!interview) return null
    return {...interview, interviewer: state.interviewers[interview.interviewer]}
  // if(interview) {
  //   const newInterview = { ...interview };
  //   // console.log ('initial: ', interview);
  //   // console.log(interview);
  //   const interviewerId = newInterview.interviewer;
  //   // console.log(state.interviewers)
  //   const interviewer = state.interviewers[interviewerId];
  //   newInterview.interviewer = interviewer;
  //   // console.log('after: ', interview);
  //   return  newInterview;
  // }
  // return null;

}

export function getInterviewerForDay(state, day) {
  let selectedInterviewer = []

  for (const index in state.days) {
    if (state.days[index].name === day) {
      selectedInterviewer = state.days[index].interviewers
    }
  }

  let testArray = []
  selectedInterviewer.forEach(elementId => {
    testArray.push(state.interviewers[elementId])
  });

  return testArray 

  // if (state.days.length === 0) {
  //   return [];
  // }
  // const dayData = state.days.filter(x => x.name === day);
  // if (dayData.length === 0 || !Array.isArray(dayData[0].interviewers)) {
  //   return [];
  // }
  // const interviewers = dayData[0].interviewers;
  // return interviewers.map(key => state.interviewers[key]);
}
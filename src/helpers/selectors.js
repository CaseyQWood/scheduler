export function getAppointmentsForDay(state, day) {
  let selectedDay = [];
  for (const index in state.days) {
    if (state.days[index].name === day) {
      selectedDay = state.days[index].appointments;
    }
  }

  let finalArray = [];
  selectedDay.forEach((elementId) => {
    if (state.appointments[elementId]) {
      finalArray.push(state.appointments[elementId]);
    }
  });
  return finalArray;
}

export function getInterview(state, interview) {
  if (!interview) return null;
  return {
    ...interview,
    interviewer: state.interviewers[interview.interviewer],
  };
}

export function getInterviewerForDay(state, day) {
  let selectedInterviewer = [];

  for (const index in state.days) {
    if (state.days[index].name === day) {
      selectedInterviewer = state.days[index].interviewers;
    }
  }

  let finalArray = [];
  selectedInterviewer.forEach((elementId) => {
    finalArray.push(state.interviewers[elementId]);
  });

  return finalArray;
}

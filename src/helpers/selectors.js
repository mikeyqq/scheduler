export function getAppointmentsForDay(state, day) {
  let appt = [];
  let result = [];
  for (let d of state.days) {
    if (d.name === day) {
      appt = d.appointments;
      for (let a of appt) {
        result.push(state.appointments[a]);
      }
    }
  }
  return result;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewerId = interview.interviewer;
  const resultInterview = { ...interview };
  resultInterview.interviewer = state.interviewers[interviewerId];

  return resultInterview;
}

export function getInterviewersForDay(state, day) {
  let result = [];
  for (let d of state.days) {
    if (d.name === day) {
      for (let personId of d.interviewers) {
        result.push(state.interviewers[personId]);
      }
    }
  }
  return result;
}

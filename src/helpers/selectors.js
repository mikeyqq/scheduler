export function getAppointmentsForDay(state, day) {
  let appts = [];
  let results = [];

  //provides info on which appointment id and number of appoinments
  for (let a of state.days) {
    if (a.name === day) {
      appts.push(...a.appointments);
    }
  }

  //Matching appt id in appointments obj to appts for days obj to extract the info in those days
  for (let d in state.appointments) {
    for (let a of appts) {
      if (a === Number(d)) {
        results.push(state.appointments[d]);
      }
    }
  }
  return results;
}

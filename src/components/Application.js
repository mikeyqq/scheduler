import React, { useState } from "react";
import DayList from "./DayList";
import "components/Application.scss";
import Appointment from "components/Appointment";
import axios from "axios";

const appointments = [
  {
    id: 1,
    time: "12pm",
    interview: {
      student: "JayJay",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 2,
    time: "2pm",
    interview: {
      student: "Tyler",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 3,
    time: "3pm",
    interview: {
      student: "V",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: "last",
    time: "4pm"
  }
];

export default function Application(props) {
  const [day, setDate] = useState("Monday");
  const [days, setDays] = useState([]);
  // const [interviewer, setInterviewer] = useState(1);

  axios.get("http://localhost:3001/api/days").then(response => {
    setDays(response.data);
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />

        <hr className="sidebar__separator sidebar--centered" />
        <DayList days={days} day={day} setDay={setDate} />
        <nav className="sidebar__menu" />

        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments.map(appointment => (
          <Appointment
            key={appointment.id}
            time={appointment.time}
            interview={appointment.interview}
          />
        ))}
      </section>
    </main>
  );
}

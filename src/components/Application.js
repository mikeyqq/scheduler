import React, { useState } from "react";
import DayList from "./DayList";
import "components/Application.scss";

export default function Application() {
  const [day, dayhandler] = useState("Monday");

  const days = [
    {
      id: 1,
      name: "Monday",
      spots: 2
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0
    }
  ];

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <DayList days={days} day={day} setDay={dayhandler} />
        <nav className="sidebar__menu" />
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

        {/* Replace this with the sidebar elements during the "Environment Setup" activity. */}
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}

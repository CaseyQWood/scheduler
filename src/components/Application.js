import React from "react";
import DayList from "./DayList";
import { useState } from "react";

import "components/Application.scss";


export default function Application({days}) {
  const [day, setDay] = useState(!!days.length ? days[0].name : 'Monday')

  return (
    <main className="layout">
      <section className="sidebar">
        {<><img
            className="sidebar--centered"
            src="images/logo.png"
            alt="Interview Scheduler"
          />
          <hr className="sidebar__separator sidebar--centered" />
          <nav className="sidebar__menu"></nav>
          <img
            className="sidebar__lhl sidebar--centered"
            src="images/lhl.png"
            alt="Lighthouse Labs"
          /></>}
      </section>
      <div>
        <DayList
          days={days}
          day={day}
          setDay={setDay}
        />
      </div>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}

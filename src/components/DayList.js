import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  return (
    <ul>
      <li>
        {props.days.map(day => (
          <DayListItem
            key={day.name}
            selected={day.name === props.day}
            spots={day.spots}
            name={day.name}
            setDay={props.setDay}
          />
        ))}
      </li>
    </ul>
  );
}

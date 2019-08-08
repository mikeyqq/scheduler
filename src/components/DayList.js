import React from "react";
import DayListItem from "./DayListItem";

export default props => {
  return (
    <ul>
      <li>
        {props.days.map(day => (
          <DayListItem
            key={day.name}
            selected={day.name === props.day}
            spots={day.spots}
            name={day.name}
            setDay={e => props.setDay(day.name)}
          />
        ))}
      </li>
    </ul>
  );
};

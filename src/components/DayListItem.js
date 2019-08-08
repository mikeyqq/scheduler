import React from "react";

import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const dayListItemClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  return (
    <div className={dayListItemClass} onClick={() => props.setDay(props.name)}>
      <h2>
        <strong>{props.name}</strong>
      </h2>
      {props.spots === 0 ? "no" : props.spots} spot{props.spots !== 1 && "s"}{" "}
      remaining
    </div>
  );
}

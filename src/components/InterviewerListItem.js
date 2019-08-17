import React from "react";
import "components/interviewerListItem.scss";
import cs from "classnames";

export default function InterviewerListItem(props) {
  const interviewerListItemClass = cs("interviewers", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewerListItemClass} onClick={props.onChange}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}

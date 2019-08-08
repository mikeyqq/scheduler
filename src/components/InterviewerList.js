import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/interviewerList.scss";
import cs from "classnames";

export default function InterviewerList(props) {
  console.log(props);
  const interviewerListClass = cs("interviewers", {});

  const listOfInterviewers = props.interviewers.map(interviewer => (
    <InterviewerListItem
      key={interviewer.id}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}
      name={interviewer.name}
      setInterviewer={e => props.onChange(interviewer.id)}
    />
  ));

  return (
    <section className={interviewerListClass}>
      <h4 class="interviewers__header text--light">Interviewer</h4>
      <li className="interviewers__list">{listOfInterviewers}</li>
    </section>
  );
}
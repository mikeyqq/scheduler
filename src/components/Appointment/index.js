import React from "react";
import classnames from "classnames";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header time={props.time} />
      <Empty
        onAdd={() => {
          console.log("Hello its empty!");
        }}
      />
      <Show
        student={"Lydia Miller-Jones"}
        interviewer={{
          id: 1,
          name: "Sylvia Palmer",
          avatar: "https://i.imgur.com/LpaY82x.png"
        }}
        onEdit={() => {
          console.log("Hello its editing for you!");
        }}
        onDelete={() => {
          console.log("Hello its deleting for you!");
        }}
      />
      <Confirm
        message={"Delete the appointment?"}
        onConfirm={() => {
          console.log("Hello do you want to confirm deleting?");
        }}
        onCancel={() => {
          console.log("Hello do you want to cancel deleting?");
        }}
      />
      <Status message={"Deleting"} />
      <Error
        errorMessage={"Error"}
        message={"Could not delete appointment."}
        onClose={() => {
          console.log("this is a X symbol!");
        }}
      />
      <Form
        onCancel={() => {
          console.log("item cancelled");
        }}
        onSave={() => {
          console.log("item cancelled");
        }}
      />
    </article>
    // {props.interview? <Show student={props.interview.student} interviewer={props.interview.interviewer} onEdit={()=>{console.log("Edit clicked")}} onDelete={()=>{console.log("Delete clicked")}} /> : null }
    // </article>;
  );
}

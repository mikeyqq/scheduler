import React from "react";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  return (
    <div>
      <Header time="12pm" />
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
    </div>
  );
}

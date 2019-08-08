import React from "react";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";

import "components/Appointment/styles.scss";

export default function Appointment() {
  return (
    <div>
      <Header time="12pm" />
      <Empty
        onAdd={() => {
          console.log("Hello its empty!");
        }}
      />
    </div>
  );
}

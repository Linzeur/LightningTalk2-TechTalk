import React from "react";

function ListEvents({ listEvents }) {
  return (
    <ul>
      {listEvents.map(event => (
        <li key={event.date.getTime()}>{`${event.date}, value of event: ${
          event.value
        }`}</li>
      ))}
    </ul>
  );
}

export default ListEvents;

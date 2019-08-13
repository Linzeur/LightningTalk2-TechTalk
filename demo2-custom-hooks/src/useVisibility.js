import React from "react";

function useVisibility() {
  const [listEvents, setListEvents] = React.useState([]);

  React.useEffect(() => {
    function handleVisibility(event) {
      console.log({ date: new Date(), value: document.visibilityState });
      console.log(listEvents);
      if (document.visibilityState === "hidden") {
        document.title = "😴";
      } else if (document.visibilityState === "visible") {
        document.title = "😁";
      }
      setListEvents(prevState =>
        prevState.concat({
          date: new Date(),
          value: document.visibilityState
        })
      );
    }

    document.addEventListener("visibilitychange", handleVisibility, false);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [document.visibilityState]);

  return listEvents;
}

export default useVisibility;

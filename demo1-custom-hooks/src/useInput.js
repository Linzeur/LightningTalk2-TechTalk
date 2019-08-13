import React from "react";

function useInput(initialValue) {
  // console.log("Call custom hook");
  // console.log(initialValue);

  const [value, setValue] = React.useState(initialValue);

  const onChange = React.useCallback(event => {
    // console.log(event.target);

    setValue(event.target.value);
  }, []);

  return { value, onChange };
}

export default useInput;

import React from "react";

function useTodos(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  return {
    value,
    add: React.useCallback(newToDo =>
      setValue(prevState => [...prevState, newToDo])
    ),
    clear: React.useCallback(() => setValue([])),
    removeIndex: React.useCallback(index =>
      setValue(prevState => {
        prevState.splice(index, 1);
        return [...prevState];
      })
    )
  };
}

export default useTodos;

import { useState } from "react";

export default function useVisualMode(value) {
  const [mode, setMode] = useState(value);
  const [history, setHistory] = useState([]);
  // tracking history of the changes of the modes

  return {
    mode: mode,
    transition: (newMode, replace) => {
      if (replace) {
        // pop top item off of current history
        setHistory([...history]);
      } else {
        setHistory([mode, ...history]); // would set to newMode if passed in 'initialMode' into the useState array when setHistory initialized
      } // append mode in this case cuz easier to take things off from start of array vs end of array
      setMode(newMode);
    },
    back: () => {
      if (history.length === 0) {
        return;
      }
      const [newMode, ...allPrevModes] = history;
      setHistory(allPrevModes);
      setMode(newMode);
    }
  };
}

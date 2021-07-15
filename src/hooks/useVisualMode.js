import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setState] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (value, replace = false) => {
    setState(value);

    if (!replace) {
      setHistory((prev) => prev.concat(value));
    } else {
      setHistory((prev) =>
        prev
          .join()
          .replace(prev.length - 1, value)
          .split(",")
      );
    }
  };

  const back = () => {
    const pastHistory = history.length > 1 ? history.slice(0, -1) : initial;
    setHistory(pastHistory);
    setState(
      Array.isArray(pastHistory)
        ? pastHistory[pastHistory.length - 1]
        : pastHistory
    );
  };

  return { mode, transition, back };
}

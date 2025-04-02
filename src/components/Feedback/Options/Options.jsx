import React from "react";
import { useState } from "react";
import s from "./Options.module.css";

const Options = ({ updateFeedback, total }) => {
  return (
    <div className={s.buttons}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {total > 0 ? (
        <button onClick={() => updateFeedback("Reset")}>Reset</button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Options;

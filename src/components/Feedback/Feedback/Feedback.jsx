import React from "react";
import s from "./Feedback.module.css";
import Options from "../Options/Options";
import { useState } from "react";

const Feedback = ({ good, neutral, bad, total, positivePercent }) => {
  return (
    <>
      <ul className={s.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        {positivePercent >= 1 ? <li>Positive: {positivePercent}%</li> : <></>}
      </ul>
    </>
  );
};

export default Feedback;

// const FeedBack = ({ Good, Neutral, Bad, Total,PositiveOpt }) => {

//   return (
//     <>
//       <div>
//         <p>Good:{Good}</p>
//         <p>Neutral:{Neutral}</p>
//         <p>Bad:{Bad}</p>
//         <p>Total:{Total}</p>
//         {PositiveOpt >= 1 ? <li></li>Positive:{PositiveOpt}%</p> : <></>}
//       </div>
//     </>
//   );
// };
// export default FeedBack;

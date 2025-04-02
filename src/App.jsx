import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Description from "./components/Feedback/Description/Description";
import Options from "./components/Feedback/Options/Options";
import Feedback from "./components/Feedback/Feedback/Feedback";
import Notification from "./components/Feedback/Notification/Notification";

function App() {
  const [options, setOptions] = useState(() => {
    const ObjectSave = window.localStorage.getItem("setSavedObject");
    if (ObjectSave !== null) {
      return JSON.parse(ObjectSave);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("setSaveObject", JSON.stringify(options)),
      [options];
  });

  const updateFeedback = (feedbackType) => {
    setOptions({
      ...options,
      [feedbackType]: options[feedbackType] + 1,
    });

    if (feedbackType == "Reset") {
      setOptions({
        ...options,
        good: (options.good = 0),
        neutral: (options.neutral = 0),
        bad: (options.bad = 0),
      });
    }
  };

  const totalFeedback = options.good + options.neutral + options.bad;
  const positiveFeedback = Math.round((options.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          good={options.good}
          neutral={options.neutral}
          bad={options.bad}
          total={totalFeedback}
          positivePercent={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;

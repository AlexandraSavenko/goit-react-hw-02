import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  const [value, setValue] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("feedbacks");
    return savedFeedbacks !== null
      ? JSON.parse(savedFeedbacks)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  const totalFeedbacks = value.good + value.neutral + value.bad;
  const positiveFeedback =
    totalFeedbacks > 0 ? Math.round((value.good / totalFeedbacks) * 100) : 0;
  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(value));
  }, [value]);
  return (
    <div>
      <Description />
      <Options state={value} onChangeState={setValue} total={totalFeedbacks} />
      {totalFeedbacks > 0 ? (
        <Feedback
          state={value}
          total={totalFeedbacks}
          preCent={positiveFeedback}
        />
      ) : (
        <p className="text">No feedbacks yet</p>
      )}
    </div>
  );
};

export default App;

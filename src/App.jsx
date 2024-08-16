import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  const [value, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedbacks = value.good + value.neutral + value.bad;
  const positivePercentage =
    totalFeedbacks > 0 ? Math.round((value.good / totalFeedbacks) * 100) : 0;

  return (
    <div>
      <Description />
      <Options state={value} onChangeState={setValue} total={totalFeedbacks} />
      {totalFeedbacks > 0 ? (
        <Feedback
          state={value}
          total={totalFeedbacks}
          preCent={positivePercentage}
        />
      ) : (
        <p>No feedbacks yet</p>
      )}
    </div>
  );
};

export default App;

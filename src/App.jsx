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

  const updateFeedbacks = () => {
    setValue({ ...value, good: 1 });
  };
  const total = value.good + value.neutral + value.bad;
  const positivePercentage =
    total > 0 ? Math.round((value.good / total) * 100) : 0;

  return (
    <div>
      <Description />
      <Options state={value} onChangeState={updateFeedbacks} />
      <Feedback state={value} total={total} preCent={positivePercentage} />
    </div>
  );
};

export default App;

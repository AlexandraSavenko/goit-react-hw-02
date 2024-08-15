import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
// const Modal = () => {
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log("interval");
//     }, 2000);
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);
//   return <div>Modal</div>;
// };
const App = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // const updateFeedbacks = (feedbacktype) => {
  //   console.log(feedbacktype);
  // };
  const total = value.good + value.neutral + value.bad;
  const positivePercentage =
    total > 0 ? Math.round((value.good / total) * 100) : 0;

  return (
    <div>
      <Description />
      <Options state={value} />
      <Feedback
        good={value.good}
        neutral={value.neutral}
        bad={value.bad}
        total={total}
        positivePercentage={positivePercentage}
      />
      {/* <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal />} */}
    </div>
  );
};

export default App;

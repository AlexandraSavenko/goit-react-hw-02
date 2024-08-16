export default function Options({ state, onChangeState, total }) {
  const updateFeedbacks = (feedback) => {
    onChangeState({ ...state, [feedback]: state[feedback] + 1 });
  };
  const resetClicks = () => {
    onChangeState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div>
      <button onClick={() => updateFeedbacks("good")}>Good</button>
      <button onClick={() => updateFeedbacks("neutral")}>Neutral</button>
      <button onClick={() => updateFeedbacks("bad")}>Bad</button>
      {total > 0 && <button onClick={resetClicks}>Reset</button>}
    </div>
  );
}

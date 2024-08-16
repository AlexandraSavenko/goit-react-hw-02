export default function Options({ state, onChangeState }) {
  return (
    <div>
      <button onClick={() => onChangeState("good")}>Good</button>
      <button onClick={() => onChangeState("neutral")}>Neutral</button>
      <button onClick={() => onChangeState("bad")}>Bad</button>
      <button>Reset</button>
    </div>
  );
}

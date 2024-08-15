export default function Options({ state, onChangeState }) {
  return (
    <div>
      <button onClick={onChangeState}>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <button>Reset</button>
    </div>
  );
}

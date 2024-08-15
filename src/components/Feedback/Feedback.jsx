export default function Feedback({
  state: { good, neutral, bad },
  total,
  preCent,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {preCent}%</p>
    </div>
  );
}

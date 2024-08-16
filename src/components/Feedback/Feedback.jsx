import css from "./Feedback.module.css";
import clsx from "clsx";
export default function Feedback({
  state: { good, neutral, bad },
  total,
  preCent,
}) {
  return (
    <div className={css.wrap}>
      <p className={clsx(css.text, { [css.positive]: good > 0 })}>
        Good: {good}
      </p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={clsx(css.text, { [css.negative]: bad > 0 })}>Bad: {bad}</p>
      <p className={css.text}>Total: {total}</p>
      <p
        className={clsx(css.text, {
          [css.noSuccess]: preCent < 49,
          [css.isSuccess]: preCent > 50,
        })}
      >
        Positive: {preCent}%
      </p>
    </div>
  );
}

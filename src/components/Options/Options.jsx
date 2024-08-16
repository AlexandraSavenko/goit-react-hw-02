import css from "./Options.module.css";
export default function Options({ onChangeState, total, onReset }) {
  // const updateFeedbacks = (feedback) => {
  //   onChangeState({ ...state, [feedback]: state[feedback] + 1 });
  // };
  // const resetClicks = () => {
  //   onChangeState({
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   });
  // };
  return (
    <div className={css.wrap}>
      <button className={css.button} onClick={() => onChangeState("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onChangeState("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onChangeState("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

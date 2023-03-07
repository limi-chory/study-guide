import cx from "classnames";

import styles from "./AnswerTF.module.css";
import { TFtype } from "./types";

interface AnswerYesProps {
  answer: TFtype;
  setAnswer: (tf: TFtype) => void;
  descriptionTrue?: string;
  descriptionFalse?: string;
}

const AnswerYes = ({
  answer,
  setAnswer,
  descriptionTrue = "네, 맞아요.",
  descriptionFalse = "아니오, 틀려요.",
}: AnswerYesProps) => {
  const clickTrue = () => {
    if (answer === TFtype.TRUE) {
      setAnswer(TFtype.UNSELECTED);
    } else {
      setAnswer(TFtype.TRUE);
    }
  };

  const clickFalse = () => {
    if (answer === TFtype.FALSE) {
      setAnswer(TFtype.UNSELECTED);
    } else {
      setAnswer(TFtype.FALSE);
    }
  };

  return (
    <>
      <button className={cx(styles.answer, { [styles.selected]: answer === TFtype.TRUE })} onClick={clickTrue}>
        <span className={cx(styles.icon, styles.true)}></span>
        <span className={styles.desc}>{descriptionTrue}</span>
      </button>
      <button className={cx(styles.answer, { [styles.selected]: answer === TFtype.FALSE })} onClick={clickFalse}>
        <span className={cx(styles.icon, styles.false)}></span>
        <span className={styles.desc}>{descriptionFalse}</span>
      </button>
    </>
  );
};

export default AnswerYes;

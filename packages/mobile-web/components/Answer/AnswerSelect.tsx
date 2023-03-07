import cx from "classnames";

import styles from "./AnswerSelect.module.css";
import { SELECT_NUMBERS } from "./const";
import { SelectType } from "./types";

interface AnswerSelectProps {
  options: string[];
  answer: SelectType;
  setAnswer: (answer: number) => void;
}

const AnswerSelect = ({ options, answer, setAnswer }: AnswerSelectProps) => {
  return (
    <div className={styles.container}>
      {options.map((option, index) => {
        return (
          <div key={`select-${index}`}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={index + 1 === answer}
              onChange={() => {
                setAnswer(index + 1);
              }}
            />
            <span className={styles.number}>{SELECT_NUMBERS[index]}</span>
            <span className={styles.description}>{option}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AnswerSelect;

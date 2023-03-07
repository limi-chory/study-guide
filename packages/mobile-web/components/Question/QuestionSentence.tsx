import styles from "./QuestionSentence.module.css";

interface QuestionSentenceProps {
  number: number;
  text: string;
}

const QuestionSentence = ({ number, text }: QuestionSentenceProps) => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles["question-number"]}>{`${number}.`}</span>
        <span className={styles["text-container"]}>
          {text.split("\n").map((text, index) => (
            <div key={`problem${number}-${index}`} className={styles["question-text"]}>
              {text}
            </div>
          ))}
        </span>
      </div>
    </>
  );
};

export default QuestionSentence;

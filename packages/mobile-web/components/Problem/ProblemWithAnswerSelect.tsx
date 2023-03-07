import { useState } from "react";

import AnswerSelect from "../Answer/AnswerSelect";
import { SelectType } from "../Answer/types";
import QuestionSentence from "../Question/QuestionSentence";
import Quote from "../Question/Quote";
import { QuoteType } from "../Question/type";
import styles from "./Problem.module.css";

interface ProblemWithAnswerSelectProps {
  number: number;
  text: string;
  options: string[];
  quote?: QuoteType;
}

const ProblemWithAnswerSelect = ({ number, text, options, quote }: ProblemWithAnswerSelectProps) => {
  const [answer, setAnswer] = useState<SelectType>(null);

  return (
    <div className={styles.container}>
      <QuestionSentence number={number} text={text} />
      {quote && <Quote text={quote.text} from={quote.from} />}
      <AnswerSelect options={options} answer={answer} setAnswer={setAnswer} />
    </div>
  );
};

export default ProblemWithAnswerSelect;

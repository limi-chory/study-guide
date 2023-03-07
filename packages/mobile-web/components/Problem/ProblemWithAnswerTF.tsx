import { useState } from "react";

import AnswerTF from "../Answer/AnswerTF";
import { TFtype } from "../Answer/types";
import QuestionSentence from "../Question/QuestionSentence";
import Quote from "../Question/Quote";
import { QuoteType } from "../Question/type";
import styles from "./Problem.module.css";

interface ProblemWithAnswerTFProps {
  number: number;
  text: string;
  descriptionTrue?: string;
  descriptionFalse?: string;
  quote?: QuoteType;
}

const ProblemWithAnswerTF = ({ number, text, descriptionTrue, descriptionFalse, quote }: ProblemWithAnswerTFProps) => {
  const [answer, setAnswer] = useState<TFtype>(TFtype.UNSELECTED);
  return (
    <div className={styles.container}>
      <QuestionSentence number={number} text={text} />
      {quote && <Quote text={quote.text} from={quote.from} />}
      <AnswerTF
        answer={answer}
        setAnswer={setAnswer}
        descriptionTrue={descriptionTrue}
        descriptionFalse={descriptionFalse}
      />
    </div>
  );
};

export default ProblemWithAnswerTF;

import styles from "./Quote.module.css";
import { QuoteType } from "./type";

const UNDER_LINE_TAG = "<ul>";

const Quote = ({ text, from }: QuoteType) => {
  return (
    <div className={styles.container}>
      {text.split("\n").map((line, index) => {
        if (line) {
          return (
            <div key={`quote-${index}`} className={styles["quote-text"]}>
              {line.includes(UNDER_LINE_TAG)
                ? line.split(UNDER_LINE_TAG).map((word, index) => (
                    <span key={`quote-${index}`} className={index % 2 === 1 ? styles["quote-underline"] : ""}>
                      {word}
                    </span>
                  ))
                : line}
            </div>
          );
        } else {
          return <br key={`quote-${index}`} />;
        }
      })}
      {from && <div className={styles.from}>{`- ${from} -`}</div>}
    </div>
  );
};

export default Quote;

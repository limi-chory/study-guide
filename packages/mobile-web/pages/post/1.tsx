import { NextPage } from "next";
import React from "react";
import { AnswerType } from "../../components/Answer/types";

import Header from "../../components/Header/Header";
import ProblemWithAnswerSelect from "../../components/Problem/ProblemWithAnswerSelect";
import ProblemWithAnswerTF from "../../components/Problem/ProblemWithAnswerTF";
import { data1 } from "../../data/1";

interface PostPageProps {}

const PostPage: NextPage<PostPageProps> = () => {
  return (
    <>
      <Header header={"이치형 테스트"} />
      {data1.problems.map(
        (
          { problemType, problemText, answerType, options, descriptionTrue, descriptionFalse, quote },
          problemNumber
        ) => {
          switch (answerType) {
            case AnswerType.TF:
              return (
                <ProblemWithAnswerTF
                  key={problemNumber}
                  number={problemNumber + 1}
                  text={problemText}
                  descriptionTrue={descriptionTrue}
                  descriptionFalse={descriptionFalse}
                  quote={quote}
                />
              );
            case AnswerType.SELECT:
              return (
                <ProblemWithAnswerSelect
                  key={problemNumber}
                  number={problemNumber + 1}
                  text={problemText}
                  options={options || []}
                  quote={quote}
                />
              );
            case AnswerType.SHORT:
              return;
            default:
              return;
          }
        }
      )}
    </>
  );
};

export default PostPage;

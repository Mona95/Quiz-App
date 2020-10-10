import React from "react";

type Props = {
  question: string;
  answers: string[]; //array of strings
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNumber}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div>
          <button disabled={userAnswer} onClick={callback}></button>
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;

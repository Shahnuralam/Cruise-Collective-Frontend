import React from "react";
import RoundedBtn from "@/atoms/RoundedBtn";

export interface IIQuestionAnswer {
  value: string | number;
  label: string;
}

export interface IQuestionProps {
  question: string;
  answers: IIQuestionAnswer[];
}

export const Question: React.FC<IQuestionProps> = (props) => {
  const { question, answers } = props;
  return (
    <div className="flex flex-col gap-4 border border-[#36453b] rounded-2xl p-10">
      <div className="select-none text-[1.5rem] text-[#36453b] font-serif text-center">
        <span>{question}</span>
      </div>
      <div className="flex flex-col gap-2">
        {answers.map((answer, answerIdx) => (
          <RoundedBtn
            variant={answerIdx === 0 ? "filled-red" : undefined}
            onClick={() => {
              alert(`Clicked to "${answer.label}"`);
            }}
            title={answer.label}
            key={`answer-${answer.value}-${answerIdx}`}
          />
        ))}
      </div>
    </div>
  );
};

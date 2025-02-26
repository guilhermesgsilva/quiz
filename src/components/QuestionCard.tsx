type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer?: string;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = (props) => {
  let {
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions,
  } = props;
  return (
    <div>
      <p className="number">
        Question: {questionNumber}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers?.map((answer) => {
          return (
            <div>
              <button disabled={!!userAnswer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;

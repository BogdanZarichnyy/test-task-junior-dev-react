import css from './Quiz.module.css';

export const Quiz = ({ questionsList, questionItem, answer, handlerAnswer, blockingActions }) => {
  return (
    <ul className={css.list}>
        {questionsList && questionsList[questionItem].answers.map((item) => 
        <li key={item.text} 
            className={
            answer === null 
                ? [css.item, blockingActions && css.blockingActions].join(' ')
                : answer === item.text 
                ? [css.item, item.isCorrect ? css.isTrueAnswer : css.isFalseAnswer, blockingActions && css.blockingActions].join(' ')
                : [css.item, blockingActions && css.blockingActions].join(' ')
            }
            onClick={blockingActions ? null : () => handlerAnswer(questionsList[questionItem].question, item.text, item.isCorrect)}
        >
            {item.text}
        </li>
        )}
    </ul>
  );
}
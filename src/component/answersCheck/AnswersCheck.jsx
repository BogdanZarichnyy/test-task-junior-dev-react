import css from './AnswersCheck.module.css';

export const AnswersCheck = ({ answers }) => {
  return (
    <ul className={css.listCheck}>
      {answers && answers.map((item) => 
        <li key={item.question} 
          className={
            item.isCorrectAnswer === null 
              ? css.itemCheck 
              : item.isCorrectAnswer 
                ? [css.itemCheck, css.itemCheckTrue].join(' ')
                : [css.itemCheck, css.itemCheckFalse].join(' ')
          }
        >

        </li>
      )}
  </ul>
  );
}
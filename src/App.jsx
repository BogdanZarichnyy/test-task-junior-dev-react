import { useEffect, useState } from 'react';
import { Quiz } from './component/quiz/Quiz';
import { AnswersCheck } from './component/answersCheck/AnswersCheck';

import css from './App.module.css';

import questions from './assets/questions.json';

function App() {
  const [questionsList, setQuestionsList] = useState(null);
  const [questionItem, setQuestionItem] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [blockingActions, setBlockingActions] = useState(false);

  useEffect(() => {
    setQuestionsList(questions);
    setAnswers(questions.map((item) => ({ question: item.question, answer: null, isCorrectAnswer: null })));
  }, []);

  const handlerAnswer = (questionItem, answerItem, isCorrect) => {
    console.log('Click answer', answerItem);
    setAnswer(answerItem);
    setAnswers((prevState) =>
      prevState.map((item) => item.question === questionItem 
        ? ({ ...item, answer: answerItem, isCorrectAnswer: isCorrect })
        : item
      )
    );
    setBlockingActions(true);
  }

  const handlerNext = () => {
    console.log('Click button next');
    setQuestionItem(prevState => 
      prevState < (questionsList && (questionsList.length - 1)) ? prevState + 1 : prevState
    );
    setAnswer(null);
    setBlockingActions(false);
  }

  return (
    <div className={css.App}>
      <div className={css.AppHeader}>

        <div className={css.questions}>

          <p className={css.count}>Question {questionItem + 1} of 3</p>

          <h1 className={css.question}>{questionsList && questionsList[questionItem].question}</h1>

          <Quiz 
            questionsList={questionsList} 
            questionItem={questionItem} 
            answer={answer} 
            handlerAnswer={handlerAnswer} 
            blockingActions={blockingActions} 
          />

          <button className={css.button} 
            type='button' 
            onClick={handlerNext} 
            disabled={questionItem === (questionsList && (questionsList.length - 1))}
          >
            Next
          </button>

          <AnswersCheck answers={answers} />

        </div>

      </div>
    </div>
  );
}

export default App;

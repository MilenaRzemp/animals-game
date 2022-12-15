// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import zwierzozmagania from '../src/zwierzozmagania.txt';


function App () {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(false);
  const [task, setTask] = useState(false);
  const [activeButton1, setActiveButton1] = useState(true);
  const [activeButton2, setActiveButton2] = useState(true);

  const getQuestion = () => {
    fetch(zwierzozmagania)
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length)
        setQuestion(data[randomNum])
      });
    setAnswer(false);
    setTask(false);
    setActiveButton1(false);
    setActiveButton2(true);
  };

  const showAnswer = () => {
    setAnswer(true);
    setActiveButton2(false);
  };

  const showTask = () => {
    setTask(true);
  };

  // const showButton1 = () => {
  //   setActiveButton1(true);
  // }

    return (
        <div>
          <button className='draw' onClick={getQuestion}>losuj pytanie</button>
          <div className='App'>
            <section>
              <button onClick={showAnswer} disabled={activeButton1} className='question-button'>pokaż odpowiedź</button>
              <div className="card">
                <div className={question === '' ? 'question-mark' : 'question-view'}>
                  {answer === false ? question.question : question.animal}
                  {answer === false 
                    ? <div></div> 
                    : <div><img className='photo' src={question.photo} alt={question.animal} />
                      <div className='source'>Źródło zdjęcia: {question.source}</div></div>}
                </div>
              </div>
            </section>
            <section>
              <button onClick={showTask} disabled={activeButton2} className='task-button'>pokaż zadanie</button>
              <div className="card second">
                <div className={task === false || answer === false ? 'exclamation-mark' : 'question-view'}>
                  {task === false ? '' : question.task}
                </div>
              </div>
            </section>
          </div>
          <footer>Autorką gry i strony jest Milena Rzempołuch</footer>
        </div>
    )
}



export default App;
import React, { useEffect, useState } from 'react';
import { CSSTransition } from "react-transition-group"
import logo from './logo.svg';
import './App.css';

import Sidebar from './UI/sidebar';
import Header from './UI/header';
import options from "./options";

function App() {

  const [sideToggle, setSideToggle] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [optionValue, setOptionValue] = useState("");
  let [counter, setCounter] = useState(0);


  const slideSidebar = () => setSideToggle(!sideToggle);

  let [questionNo, setQuestionNo] = useState(0);
  let [questionStatus, setQuestionStatus] = useState("wrong");

  const submitted = (e) => {

    e.preventDefault();



    if (optionValue == options[questionNo].correctAnswer) {
      setCounter(counter += 5);
      setQuestionStatus("correct");
    }
    else {
      setCounter(counter -= 5);
    }
    setShowButton(false);


    // setTimeout(()=>{



    // },2000)

  }

  const goToNextQuestion = () => {

    // if( questionNo   ){
    //   return
    // }
    setQuestionStatus("wrong")
    console.log(options.length - 1, questionNo);
    if (questionNo >= options.length - 1) {
      // window.prompt("Windows");
      alert("No more Questions, Try again ?");
      console.log(counter);
      setCounter(0);
      setShowButton(true);
      setQuestionNo(0);

    }
    else {
      setShowButton(true);
      setQuestionNo(questionNo += 1);
    }




  }

  return (
    <body>

      <div className="header">
        <div>
          <h1>Question {questionNo}</h1>
        </div>
        <div>
          <h1>Score:{counter}</h1>
        </div>
      </div>
      <hr></hr>


      <div className="content">


        {showButton ?

          <div>
            <div>


              <h2>{options[questionNo].question}</h2>
              <div className="options">




                <div className="option">
                  <form >
                    {
                      options[questionNo].options.map(item => (
                        <div>

                          <input onClick={(e) => setOptionValue(e.target.value)} style={{ marginRight: "15px", marginTop: "20px" }} type="radio" name="answer" value={item} />
                          <label htmlFor="answer">{item}</label>
                        </div>
                      ))
                    }


                    <div className="buttons">

                      <button type="submit" onClick={submitted} className="submit-btn">Submit</button>
                      <button className="cancel-btn">Cancel</button>

                    </div>

                  </form>
                </div>


              </div>
            </div>

            <div>
              <img className="img-container" src="" />
            </div>
          </div>





          :

          <div>
            <div className={questionStatus == "wrong" ? "correct-answer wrong-answer" : "correct-answer"}>
              {questionStatus}
            </div>
            <button className="submit-btn" onClick={goToNextQuestion}>Next Question</button>
          </div>
        }

      </div>


      {/* { 
        showButton==false ? 
        <button className="submit-btn" onClick={()=>goToNextQuestion()}>
            Next Question
        </button>:null
      } */}



      {/* <button className="submit-btn" onClick={() => goToNextQuestion()}>
        Next Question
        </button> */}

    </body>


  )
}

export default App;

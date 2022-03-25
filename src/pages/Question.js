import { React, useState } from "react";
import axios from "axios";
import "../custom.scss";
import ThankYou from "./ThankYou";
var array =[]
const Question = (props) => {
  const [indexid, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [qa, setQa] = useState({});
 
 
  const urlSearchParams = new URLSearchParams(window.location.search);
  const token = Object.fromEntries(urlSearchParams.entries());


 

  var questions = [
    {
      question:
        "How would you feel if you could use fingerprint to lock/unlock Payme?",
    },
    {
      question:
        "How would you feel if you could have a chatbot to solve your queries?",
    },
    {
      question:
        "How would you feel if we provided you rewards if you pay loans on time?",
    },
    {
      question:
        "How would you feel if you get amazing rewards every time you refer PayMe App to friends/family?",
    },
    {
      question:
        "How would you like if you could access salary advance from your company through PayMe?",
    },
    {
      question:
        "How would you feel if you could not use fingerprint to lock/unlock Payme?",
    },
    {
      question:
        "How would you feel if you could not have a chatbot to solve your queries?",
    },
    {
      question:
        "How would you feel if we did not provide you rewards if you pay loans on time?",
    },
    {
      question: "How would you feel if you don't get any rewards on referral?",
    },
    {
      question:
        "How would feel if you could not get salary advance from your company through PayMe?",
    },
  ];
  var options = [
    { option: "I would love this" },
    { option: "I expect this" },
    { option: "I don't care about this" },
    { option: "It is okay if this is not present" },
    { option: "I would not be happy if this is not present" },
  ];

 

  const handleAnswers = () => {
    
    array.push(qa)
  
     let req = {
       "answer_json":array
     }
    let url = "https://api.testing.paymeindia.in/api/feature_research/answer/";

    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token.token,
      },
    };


    axios
      .post(url,req, config)
      .then((res) => {
       
       
      })
      .catch((err) => {
        console.log(err);
        alert(err)
      });
  };

  return (
    <>
      <div className="question-page">
        {indexid === 10 ? <ThankYou {...props}/> :
       (
          <div>
          <div
            className="question"
            style={{ color: "#414750", fontWeight: "500",lineHeight:"23px" }}
          >
            {questions[indexid].question}
          </div>

          {options.map((option, index) => {
            return (
              <div key={index} className="options">
                <div
                  style={{
                    display: "flex",
                    padding: "15px",
                    paddingLeft: "30px",
                    paddingRight: "10px",
                  }}
                >
                  <input
                    style={{
                      fontSize: "10px",
                      zoom: "110%",
                      marginTop: "10px",
                    }}
                    type="radio"
                    name="answer"
                    value={option.option}
                    onChange={(e) => {
                     
                      if (answer === option.option) { 
                        setAnswer("");
                      } else {
                        setAnswer(e.target.value);
                       let temp = {
                         "question":questions[indexid].question,
                         "answer":e.target.value
                       }
                      
                       setQa(temp)
                     
                      }
                    }}
                    checked={answer === option.option ? true : false}
                  />
                  <div style={{ marginTop: "10px",marginLeft:"7px" }}>{option.option}</div>
                </div>
              </div>
            );
          })}
          <div>

            <button
              className="button_next"
              onClick={() => {
                setIndex((prev) => indexid + 1);
                setAnswer("");
                setQa("");
                handleAnswers()
              }}
              disabled={answer==="" ? true :false}
            >
              Next
            </button>
          </div>
        </div>
       )}
      </div>
    </>
  );
};

export default Question;

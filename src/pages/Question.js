import { React, useState } from "react";
import axios from "axios";
import "../custom.scss";

const Question = (props) => {
  const [indexid, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [qa, setQa] = useState("");
  const [data, setData] = useState([]);
  const ThankYou = () => {
    props.history.push("/thank-you");
  };

  const urlSearchParams = new URLSearchParams(window.location.search);
  const token = Object.fromEntries(urlSearchParams.entries());
  console.log("token",token)

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
   
     let req = {
       "answer_json":data
     }
    let url = "https://api.testing.paymeindia.in/api/feature_research/answer/";

    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token.token,
      },
    };
    console.log("req", req);

    axios
      .post(url,req, config)
      .then((res) => {
        console.log("answerjson", req);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="question-page">
        <div>
          <div
            className="question"
            style={{ color: "#414750", fontWeight: "500" }}
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
                    type="checkbox"
                    name="answer"
                    value={option.option}
                    onChange={(e) => {
                      if (answer === e.target.value) {
                        var array = data;
                        array.splice(indexid,1) 
                        
                        setAnswer("");
                      } else {
                        setAnswer(e.target.value);
                       let temp = {
                         "question":questions[indexid].question,
                         "answer":e.target.value
                       }
                       setData((prevState)=>([...prevState,temp]))
                       console.log("data",data)
                      }
                    }}
                    checked={answer === option.option}
                  />
                  <div style={{ marginTop: "10px" }}>{option.option}</div>
                </div>
              </div>
            );
          })}
          <div>

            <button
              className="button_next"
              onClick={() => {
                setAnswer("");
                setQa("");
                if (indexid < 9) {
                  setIndex((prev) => indexid + 1);
                  handleAnswers();
                } else {
                  ThankYou();
                }
              }}
              disabled={answer==="" ? true :false}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;

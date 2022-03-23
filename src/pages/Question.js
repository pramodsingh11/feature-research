import { React, useState } from "react";
import '../custom.scss'
const Question = (props) => {
  const [index, setIndex] = useState(0);
  const ThankYou = () => {
    props.history.push("/thank-you");
  };
  console.log("aaaa", index);

  var questions = [
    {
      question:
        "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      options: [
        { option: "1 I would like to ..." },
        { option: "1 I expect this  ..." },
        { option: "1 I dont care about this ..." },
        { option: "1 I would like to ..." },
        { option: "1 I would not happy it this would not happen ..." },
      ],
    },
    {
      question:
        " 2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      options: [
        { option: "2I would like to ..." },
        { option: "2I expect this  ..." },
        { option: "2I dont care about this ..." },
        { option: "2I would like to ..." },
        { option: "2I would not happy it this would not happen ..." },
      ],
    },
    {
      question:
        "3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      options: [
        { option: "3I would like to ..." },
        { option: "3I expect this  ..." },
        { option: "3I dont care about this ..." },
        { option: "3I would like to ..." },
        { option: "3I would not happy it this would not happen ..." },
      ],
    },
    {
      question:
        "4Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      options: [
        { option: "4I would like to ..." },
        { option: "4I expect this  ..." },
        { option: "4I dont care about this ..." },
        { option: "4I would like to ..." },
        { option: "4I would not happy it this would not happen ..." },
      ],
    },
    {
      question:
        " 5Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      options: [
        { option: "4I would like to ..." },
        { option: "4I expect this  ..." },
        { option: "4I dont care about this ..." },
        { option: "4I would like to ..." },
        { option: "4I would not happy it this would not happen ..." },
      ],
    },
    {
      question:
        " 6Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      options: [
        { option: "4I would like to ..." },
        { option: "4I expect this  ..." },
        { option: "4I dont care about this ..." },
        { option: "4I would like to ..." },
        { option: "4I would not happy it this would not happen ..." },
      ],
    },
    {
      question:
        " 7Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      options: [
        { option: "4I would like to ..." },
        { option: "4I expect this  ..." },
        { option: "4I dont care about this ..." },
        { option: "4I would like to ..." },
        { option: "4I would not happy it this would not happen ..." },
      ],
    },
    {
      question:
        " 8Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      options: [
        { option: "4I would like to ..." },
        { option: "4I expect this  ..." },
        { option: "4I dont care about this ..." },
        { option: "4I would like to ..." },
        { option: "4I would not happy it this would not happen ..." },
      ],
    },
    {
      question:
        " 9Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      options: [
        { option: "4I would like to ..." },
        { option: "4I expect this  ..." },
        { option: "4I dont care about this ..." },
        { option: "4I would like to ..." },
        { option: "4I would not happy it this would not happen ..." },
      ],
    },
    {
      question:
        " 10Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      options: [
        { option: "4I would like to ..." },
        { option: "4I expect this  ..." },
        { option: "4I dont care about this ..." },
        { option: "4I would like to ..." },
        { option: "4I would not happy it this would not happen ..." },
      ],
    },
    {
      question:
        " 11Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      options: [
        { option: "4I would like to ..." },
        { option: "4I expect this  ..." },
        { option: "4I dont care about this ..." },
        { option: "4I would like to ..." },
        { option: "4I would not happy it this would not happen ..." },
      ],
    },
    {
      question:
        " 12Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      options: [
        { option: "4I would like to ..." },
        { option: "4I expect this  ..." },
        { option: "4I dont care about this ..." },
        { option: "4I would like to ..." },
        { option: "4I would not happy it this would not happen ..." },
      ],
    },
  ];
  return (
    <>
      <div className="question-page">
        <div>
          <div className="question" style={{color:"#414750",fontWeight:"500"}}>{questions[index].question}</div>

          {questions[index].options.map((option, index) => {
            console.log("index", index, option);
            return (

              <div key={index} className="options">
                <div style={{display:"flex",padding:"15px",paddingLeft:"30px",paddingRight:"10px"}}>
                <input
                  style={{ fontSize: "10px", zoom: "110%" ,marginTop:"10px"}}
                  type="checkbox"
                  name="option"
                  value="option"
                />
                  <div style={{marginTop:"10px"}}>{option.option}</div>
</div>
              
              </div>
            );
          })}
          <div>
            <button
             className="button_next"
              onClick={() => {
                if (index < 11) {
                  setIndex((prev) => index + 1);
                } else {
                  ThankYou();
                }
              }}
             
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

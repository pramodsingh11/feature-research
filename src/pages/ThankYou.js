import React from "react";
import "../custom.scss";

const ThankYou = () => {
 
  return (
    <>
      <div className="thank-you-page">
        <div>
          <div className="thankyou">Thank You !</div>
          <div className="thank-note">
            Thanks for being an awesome customer!
          </div>
          <button
            className="button_exit"
            onClick={() => {
              window.open("https://apiv2.paymeindia.in/close", "_self");
            }}
          >
            Exit
          </button>
        </div>
      </div>
    </>
  );
};

export default ThankYou;

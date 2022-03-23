import React from "react";
import Invited from "../images/Invited.png";
import "../custom.scss";
const Home = (props) => {
  return (
    <>
      <div className="homepage" style={{height:
      '100%',display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div
          className="wrapper"
          style={{
            textAlign: "center",
            background: "#97b6ef",
            width: "268px",
            borderRadius: "5px",
          }}
        >
          <img className="invited_image" src={Invited} alt="you are invitred" />

          <div
            className="content_box"
            style={{ margin: "7px", marginBottom: "35px", color: "#52617A" }}
          >
            Thanks you for your support and helping us grow. We would be grate
            if you could help define features to bring in our app by answering a
            few questions.
          </div>
          <div
            className="button-anchor"
            style={{ marginBottom: "30px", paddingBottom: "30px" }}
          >
            <a
              onClick={() => {
                props.history.push("/questions");
              }}
              className="white"
              style={{
                marginLeft: "110px",
                marginTop: "80px",
                color: "#F8FFDF",
                pointer: "cursor",
              }}
            >
              Let's go
            </a>
            <a
              style={{
                marginLeft: "20px",
                color: "#52617A",
                pointer: "cursor",
              }}
            >
              Nah!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";

const GreetingScreen = (props) => {
  return (
    <div
      style={{backgroundColor:props.mode=='dark'?'#212121':'white',
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "rgb(98, 0, 234)", fontSize: "2.5rem" }}>
        Hello, Avinash
      </h1>
    </div>
  );
};

export default GreetingScreen;

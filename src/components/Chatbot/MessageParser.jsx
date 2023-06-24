import React from "react";
import Message from "./Apis";

const MessageParser = ({ children, actions }) => {
  const testURL = "https://chatbot-apz7.onrender.com/chatBot";

  const parse = (message) => {
    if (message.includes("")) {
      actions.handleHello();
    }
    if (message.includes("know more")) {
      actions.knowMore();
    }
    if (message.includes("digital tokens")) {
      actions.digitalTokens();
    }
    if (message.includes("j")) {
      actions.fundWallet();
    }
    if (message.includes("crypto used")) {
      actions.cryptoUsed();
    }
    if (message.includes("start platform")) {
      actions.startPlatform();
    }
    if (message.includes("trust platform")) {
      actions.trustPlatform();
    }
    if (message) {
      const data = {
        message: "Hello",
      };
      console.log(data);
      // Message(data)
      //   .then((response) => {
      //     console.log(response);
      //     actions.chatbot(response.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // ...
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        message: "Hello",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://chatbot-apz7.onrender.com/chatBot", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      // let fetchData = {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   mode: "no-cors",
      //   headers: new Headers({
      //     "Content-Type": "application/json; charset=UTF-8",
      //   }),
      // };

      // fetch(testURL, fetchData)
      //   .then((response) => {
      //     console.log(response.text());
      //     actions.chatbot(response);
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;

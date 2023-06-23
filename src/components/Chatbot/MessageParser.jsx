import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("hello")) {
      actions.handleHello();
    }
    if (message.includes("know more")) {
      actions.knowMore();
    }
    if (message.includes("digital tokens")) {
      actions.digitalTokens();
    }
    if (message.includes("fund wallet")) {
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

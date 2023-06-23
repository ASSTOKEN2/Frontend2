import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("hello Nice To meet you");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  // kNOW MORE
  const knowMore = () => {
    const botMessage = createChatBotMessage(
      `To explore our platform  you can click on the about page button`
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // DIGITAL TOKENS
  const digitalTokens = () => {
    const botMessage = createChatBotMessage(
      `Digital tokens are a form of digital currency just like your traditional currency that are used on this platform.
       They can also be called cryptocurrency.`
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // FUND WALLET
  const fundWallet = () => {
    const botMessage = createChatBotMessage(
      `You can use any of ur local banks such as Prodvidus Bank, Wema Bank, 
      and others and convert your traditional currency to digital tokens. For any question on investment and and finance  
      please head to our services and investment section.`
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // CRYPTO USED ON THIS PLATFORM
  const cryptoUsed = () => {
    const botMessage = createChatBotMessage(`HBAR  is the digital currency or crypto-currency being used, 
    for official rates with other traditional currencies or other crypto-currencies,
     please check the investment page or your dashboard when you signUp or log in on this platform `);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // START USING PLATFORM
  const startPlatform = () => {
    const botMessage = createChatBotMessage(`Register your details for a free account and signup,
     login subsequently to update your details or check your dashboard. Fund your e-wallet to get digital tokens,
      and complete  transactions on the platform `);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // TRUST THE PLATFROM
  const trustPlatform = () => {
    const botMessage = createChatBotMessage(`The platform is built on a web 3.0 technology,
     incorporating tools such as smart contracts and blockchain technology,
      these technologies ensure a high form of secured transaction and transparency on the platform,
       to know more about how these technologies power our platform and works, please go to the blogs/privacy/page `);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            knowMore,
            digitalTokens,
            fundWallet,
            cryptoUsed,
            startPlatform,
            trustPlatform,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

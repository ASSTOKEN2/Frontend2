import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Azeez";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}, how may i help you?`),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5cc9d",
    },
  },
};

export default config;

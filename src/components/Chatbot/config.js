import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Comfy";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hi my name is ${botName}, i am your AI personal assistant, How may i help you?`
    ),
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

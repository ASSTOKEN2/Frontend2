import ChatApi from "./ChatApi";

const Message = (data) => {
    return ChatApi.post('/chatBot', data)
}
export default Message
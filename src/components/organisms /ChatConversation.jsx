import ChatEmptyState from "./ChatEmptyState";
import ChatMessagesList from "./ChatMessagesList";

const ChatConversation = ({ messages }) => {
    if (!messages.length) {
        return <ChatEmptyState />;
    }

    return <ChatMessagesList messages={messages} />;
};

export default ChatConversation;

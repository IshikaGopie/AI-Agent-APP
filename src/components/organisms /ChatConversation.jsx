import ChatEmptyState from "./ChatEmptyState";
import ChatMessagesList from "./ChatMessagesList";

const ChatConversation = ({
                              messages = [],
                              agentEmoji,
                              agentColor,
                              agentName,
                              agentDescription,
                          }) => {
    if (!messages.length) {
        return (
            <ChatEmptyState
                agentEmoji={agentEmoji}
                agentColor={agentColor}
                agentName={agentName}
                agentDescription={agentDescription}
            />
        );
    }

    return (
        <ChatMessagesList
            messages={messages}
            agentEmoji={agentEmoji}
            agentColor={agentColor}
        />
    );
};

export default ChatConversation;

import ChatEmptyState from "./ChatEmptyState";
import ChatMessagesList from "./ChatMessagesList";

const ChatConversation = ({
                              messages = [],
                              agentEmoji,
                              agentColor,
                              agentName,
                              agentDescription,
                              agentExamples,
                              isLoadingResponse,
                          }) => {
    if (!messages.length && !isLoadingResponse) {
        return (
            <ChatEmptyState
                agentEmoji={agentEmoji}
                agentColor={agentColor}
                agentName={agentName}
                agentDescription={agentDescription}
                agentExamples={agentExamples}
            />
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
            <ChatMessagesList
                messages={messages}
                agentEmoji={agentEmoji}
                agentColor={agentColor}
                isLoadingResponse={isLoadingResponse}
            />
        </div>
    );
};

export default ChatConversation;

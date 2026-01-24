import ChatEmptyState from "./ChatEmptyState";
import ChatMessagesList from "./ChatMessagesList";
import PdfAttachment from "../molecules/PdfAttachment";
import { Box } from "@mui/material";

const ChatConversation = ({
                              messages = [],
                              agentEmoji,
                              agentColor,
                              agentName,
                              agentDescription,
                              agentExamples,
                              isLoadingResponse,
                              pdfInfo,
                              onDeletePdf,
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
            {pdfInfo && (
                <Box sx={{ padding: 3, paddingBottom: 0 }}>
                    <PdfAttachment pdfInfo={pdfInfo} onDelete={onDeletePdf} />
                </Box>
            )}
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

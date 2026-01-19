import { Box } from "@mui/material";
import EmptyStateHeader from "../molecules/EmptyStateHeader.jsx";
import ExampleQuestionsCard from "../molecules/ExampleQuestionsCard.jsx";

const ChatEmptyState = ({
                            agentEmoji,
                            agentColor,
                            agentName = "Agent",
                            agentDescription = "",
                        }) => {
    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 4,
            }}
        >
            <Box
                sx={{
                    maxWidth: 520,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                }}
            >
                <EmptyStateHeader
                    emoji={agentEmoji}
                    iconBg={agentColor}
                    title={`Chat with ${agentName}`}
                    description={agentDescription}
                />
                <ExampleQuestionsCard />
            </Box>
        </Box>
    );
};

export default ChatEmptyState;

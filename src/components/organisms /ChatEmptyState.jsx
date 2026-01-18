import { Box } from "@mui/material";
import EmptyStateHeader from "../molecules/EmptyStateHeader.jsx";
import ExampleQuestionsCard from "../molecules/ExampleQuestionsCard.jsx";

const ChatEmptyState = () => {
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
                <EmptyStateHeader />
                <ExampleQuestionsCard />
            </Box>
        </Box>
    );
};

export default ChatEmptyState;

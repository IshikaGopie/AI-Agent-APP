import { Box } from "@mui/material";

const MessageBubble = ({ children, isAgent }) => {
    return (
        <Box
            sx={{
                padding: "14px 18px",
                borderRadius: "16px",
                maxWidth: "650px",
                backgroundColor: isAgent ? "#ffffff" : "#2563eb",
                color: isAgent ? "#0f172a" : "#ffffff",
                border: isAgent ? "1px solid #e5e7eb" : "none",
            }}
        >
            {children}
        </Box>
    );
};

export default MessageBubble;

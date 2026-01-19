import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import DefaultIcon from "../atoms/DefaultIcon";

const ChatListItem = ({
                          emoji = "✈️",
                          iconBg = "#3b82f6",
                          agentName = "Travel Expert",
                          title = "New Travel Expert Chat",
                          timestamp = "Just now",
                          onDelete,
                          onClick,
                          active = false,
                      }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                padding: "14px",
                borderRadius: "14px",
                cursor: "pointer",
                backgroundColor: active ? "#eff6ff" : "transparent",
                border: active ? "1px solid #bfdbfe" : "1px solid transparent",

                "&:hover": {
                    backgroundColor: "#eff6ff",
                },
            }}
            onClick={onClick}
        >
            <DefaultIcon emoji={emoji} color={iconBg} boxSize={40} size={20} />

            <Box sx={{ flex: 1 }}>
                <Box
                    sx={{
                        display: "inline-block",
                        backgroundColor: "#e5e7eb",
                        borderRadius: "999px",
                        padding: "2px 10px",
                        marginBottom: "6px",
                    }}
                >
                    <Typography fontSize={12} fontWeight={600}>
                        {agentName}
                    </Typography>
                </Box>

                <Typography fontSize={16} fontWeight={600} color="#111827">
                    {title}
                </Typography>

                <Typography fontSize={14} color="#6b7280">
                    {timestamp}
                </Typography>
            </Box>

            <IconButton
                size="small"
                onClick={(event) => {
                    event.stopPropagation();
                    onDelete?.();
                }}
                sx={{
                    color: "#ef4444",
                    marginTop: "4px",
                }}
            >
                <DeleteOutlineIcon fontSize="small" />
            </IconButton>
        </Box>
    );
};

export default ChatListItem;

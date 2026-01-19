import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import DefaultIcon from "../atoms/DefaultIcon";

const AgentHeader = ({
                         emoji = "✈️",
                         iconBg = "#3b82f6",
                         agentName = "Travel Expert",
                         description = "Your personal travel advisor for destinations, itineraries, and tips",
                         onClick,
                     }) => {
    return (
        <Box
            component={onClick ? "button" : "div"}
            type={onClick ? "button" : undefined}
            onClick={onClick}
            sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1.25, sm: 2 },
                padding: { xs: "10px 10px", sm: "16px 20px" },
                textAlign: "left",
                background: "transparent",
                border: 0,
                cursor: onClick ? "pointer" : "default",
                borderRadius: "12px",
                minWidth: 0,
                "&:hover": onClick
                    ? { backgroundColor: "#f8fafc" }
                    : undefined,
            }}
        >
            <DefaultIcon
                emoji={emoji}
                color={iconBg}
                boxSize={36}
                size={18}
            />

            <Box sx={{ minWidth: 0 }}>
                <Typography
                    fontSize={{ xs: 14, sm: 16 }}
                    fontWeight={600}
                    color="#111827"
                    noWrap
                >
                    {agentName}
                </Typography>

                <Typography
                    fontSize={14}
                    color="#6b7280"
                    sx={{ display: { xs: "none", sm: "block" } }}
                    noWrap
                >
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default AgentHeader;

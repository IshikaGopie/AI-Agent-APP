import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import DefaultIcon from "../atoms/DefaultIcon";

const AgentHeader = ({
                         emoji = "✈️",
                         iconBg = "#3b82f6",
                         agentName = "Travel Expert",
                         description = "Your personal travel advisor for destinations, itineraries, and tips",
                     }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                padding: "16px 20px",
            }}
        >
            <DefaultIcon emoji={emoji} color={iconBg} boxSize={40} size={20} />

            <Box>
                <Typography fontSize={16} fontWeight={600} color="#111827">
                    {agentName}
                </Typography>

                <Typography fontSize={14} color="#6b7280">
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default AgentHeader;
